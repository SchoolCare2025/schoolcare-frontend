import { DropZoneInput, IconBox } from "@/components/common";
import { EditIcon } from "@/components/icons";
import { Form } from "@/components/ui";
import { cnMerge } from "@/lib/utils/cn";
import { useRegisterFormStore } from "@/store/zustand/registerFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import Main from "../_components/Main";

const PersonalInfoSchema = z.object({
	email: z.string().email("Please enter a valid email!"),
	logo: z.instanceof(File).nullable().optional(),
	name: z.string().min(1, "Name is required").max(50, "Name is too long"),
});

function PersonalInfoPage() {
	const {
		actions: { updateFormData },
		formStepData,
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
		<Main className="flex flex-col gap-8">
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
									classNames={{ base: "w-fit", input: "hidden" }}
								>
									{(ctx) => (
										<span
											className="relative mt-4 block size-[110px] rounded-full bg-gray-200
												bg-cover md:mt-8 md:size-[200px]"
											style={{
												backgroundImage: ctx.dropZoneState.filesWithPreview[0]?.preview
													? `url(${ctx.dropZoneState.filesWithPreview[0]?.preview})`
													: "",
											}}
										>
											<button type="button" onClick={ctx.dropZoneActions.openFilePicker}>
												<EditIcon
													className={cnMerge(
														"absolute right-3 bottom-2 size-[18px] md:size-[40px]",
														ctx.dropZoneState.filesWithPreview[0]?.preview
															&& "[&_path]:stroke-school-blue"
													)}
												/>
											</button>
										</span>
									)}
								</DropZoneInput>
							)}
						/>
					</Form.Field>

					<Form.Field<typeof methods.control> name="name" className="gap-3 md:gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">Name of School</Form.Label>

						<Form.Input
							placeholder="Enter school name"
							className="h-[48px] gap-3.5 rounded-[8px] border-2 border-school-gray bg-white px-4
								text-[12px] data-placeholder:text-school-gray md:h-[75px] md:rounded-[20px] md:px-8
								md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.Field<typeof methods.control> name="email" className="gap-3 md:gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">School Email</Form.Label>

						<Form.Input
							type="email"
							placeholder="Enter school email"
							className="h-[48px] gap-3.5 rounded-[8px] border-2 border-school-gray bg-white px-4
								text-[12px] data-placeholder:text-school-gray md:h-[75px] md:rounded-[20px] md:px-8
								md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.Submit
						disabled={!methods.formState.isValid || methods.formState.isSubmitting}
						className={cnMerge(
							`flex max-w-fit min-w-[77px] items-center justify-center gap-3 self-end rounded-[4px]
							bg-school-blue px-3 py-[6px] text-[14px] font-semibold text-white md:rounded-[8px]
							md:px-5 md:py-2 md:text-[18px]`,
							!methods.formState.isValid && "cursor-not-allowed bg-gray-400"
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
