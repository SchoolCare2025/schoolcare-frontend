import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { DropZoneInput, IconBox } from "@/components/common";
import { EditIcon } from "@/components/icons";
import { Form } from "@/components/ui";
import { cnMerge } from "@/lib/utils/cn";
import { z } from "@/lib/zod";
import { Main } from "@/pages/dashboard/-components/Main";
import { useRegisterFormStore } from "@/store/zustand/registerFormStore";

export const PersonalInfoSchema = z.object({
	email: z.email({ error: "Please enter a valid email!" }),
	logo: z.file({ error: "Please upload a logo!" }),
	name: z.string().min(1, { error: "Name is required" }).max(50, { error: "Name is too long" }),
});

function PersonalInfoPage() {
	const {
		actions: { updateFormData },
		formStepData,
		logoPreview,
	} = useRegisterFormStore((state) => state);

	const methods = useForm({
		defaultValues: formStepData,
		mode: "onChange",
		resolver: zodResolver(PersonalInfoSchema),
	});

	const navigate = useNavigate();

	const onSubmit = methods.handleSubmit((data) => {
		updateFormData(data);

		void navigate("/register/address");
	});

	return (
		<Main className="flex flex-col gap-8 p-0 md:p-0">
			<header>
				<h1 className="text-[18px] font-bold md:text-[30px]">Register your school</h1>
				<p className="mt-2 text-[10px] md:text-[18px]">Please fill in the details below</p>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="mt-3 gap-8 md:gap-[56px]"
					onSubmit={(event) => void onSubmit(event)}
				>
					<Form.Field<typeof methods.control> name="logo">
						<Form.FieldController
							render={({ field }) => (
								<DropZoneInput
									onChange={field.onChange}
									allowedFileTypes={["image/png", "image/jpeg", "image/jpg"]}
									withDefaultFilePicker={false}
									onFilesChange={(ctx) => {
										const preview = ctx.filesWithPreview[0]?.preview;

										preview && useRegisterFormStore.setState({ logoPreview: preview });
									}}
									classNames={{ base: "w-fit" }}
								>
									{({ dropZoneActions }) => (
										<span
											className="relative mt-4 block size-[110px] rounded-full
												bg-[hsl(0,0%,85%)] bg-cover md:mt-8 md:size-[200px]"
											style={{ backgroundImage: logoPreview ? `url(${logoPreview})` : "" }}
										>
											<button type="button" onClick={dropZoneActions.openFilePicker}>
												<EditIcon
													className={cnMerge(
														"absolute right-3 bottom-2 size-[18px] md:size-[40px]",
														logoPreview && "[&_path]:stroke-school-blue"
													)}
												/>
											</button>
										</span>
									)}
								</DropZoneInput>
							)}
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.Field<typeof methods.control> name="name" className="gap-3 md:gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">Name of School</Form.Label>

						<Form.Input
							placeholder="Enter school name"
							className="h-[48px] gap-3.5 rounded-[8px] border border-school-gray-lighter bg-white
								px-4 text-[12px] data-placeholder:text-school-gray md:h-[75px] md:rounded-[20px]
								md:px-8 md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.Field<typeof methods.control> name="email" className="gap-3 md:gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">School Email</Form.Label>

						<Form.Input
							type="email"
							placeholder="Enter school email"
							className="h-[48px] gap-3.5 rounded-[8px] border border-school-gray-lighter bg-white
								px-4 text-[12px] data-placeholder:text-school-gray md:h-[75px] md:rounded-[20px]
								md:px-8 md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.Submit
						disabled={methods.formState.isSubmitting}
						className={cnMerge(
							`flex max-w-fit min-w-[77px] items-center justify-center gap-3 self-end rounded-[4px]
							bg-school-blue px-3 py-[6px] text-[14px] font-semibold text-white md:rounded-[8px]
							md:px-5 md:py-2 md:text-[18px]`
						)}
					>
						Next
						<IconBox icon="material-symbols:arrow-forward-ios-rounded" />
					</Form.Submit>
				</Form.Root>
			</section>
		</Main>
	);
}

export default PersonalInfoPage;
