import { IconBox } from "@/components/common";
import { EditIcon } from "@/components/icons";
import { Form } from "@/components/ui";
import { DropZone } from "@/components/ui/drop-zone";
import { cnMerge } from "@/lib/utils/cn";
import { type StepOneData, useRegisterFormStore } from "@/store/zustand/signupFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleImagePreview } from "@zayne-labs/toolkit";
import type { MyCustomCss } from "@zayne-labs/toolkit/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Main from "../_components/Main";

const PersonalInfoSchema = z.object({
	email: z.string().email("Please enter a valid email!"),
	logo: z.custom<File>((file) => file instanceof File).optional(),
	name: z.string().min(1, "Name is required").max(50, "Name is too long"),
});

function PersonalInfoPage() {
	const {
		actions: { updateFormData, updateLogoPreview },
		formStepData,
		logoPreview,
	} = useRegisterFormStore((state) => state);

	const methods = useForm<StepOneData>({
		defaultValues: formStepData,
		resolver: zodResolver(PersonalInfoSchema),
	});

	const navigate = useNavigate();

	const onSubmit = (data: StepOneData) => {
		updateFormData(data);

		void navigate("/register/address");
	};

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
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Item<typeof methods.control> name="logo">
						<Form.Controller
							render={({ field }) => (
								<DropZone
									classNames={{ input: "hidden" }}
									onUpload={({ acceptedFiles }) => {
										field.onChange(acceptedFiles[0]);

										handleImagePreview({
											file: acceptedFiles[0],
											onSuccess: (ctx) => updateLogoPreview(ctx.result),
										});
									}}
								>
									{({ inputRef }) => (
										<span
											className="relative mt-4 block size-[110px] rounded-full bg-gray-200
												bg-cover md:mt-8 md:size-[200px]"
											style={
												{
													backgroundImage: logoPreview ? `url(${logoPreview})` : "",
												} as MyCustomCss
											}
										>
											<button type="button" onClick={() => inputRef.current?.click()}>
												<EditIcon
													className={cnMerge(
														"absolute bottom-2 right-3 size-[18px] md:size-[40px]",
														logoPreview && "[&_path]:stroke-school-blue"
													)}
												/>
											</button>
										</span>
									)}
								</DropZone>
							)}
						/>
					</Form.Item>

					<Form.Item<typeof methods.control> name="name" className="gap-4">
						<Form.Label className="text-[14px] font-semibold md:text-base">
							Name of School
						</Form.Label>

						<Form.Input
							placeholder="Enter school name"
							className="h-[60px] rounded-[10px] border-2 border-school-gray px-8 text-[14px]
								md:h-[75px] md:rounded-[20px] md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Item>

					<Form.Item<typeof methods.control> name="email" className="gap-4">
						<Form.Label className="text-[14px] font-semibold md:text-base">School Email</Form.Label>

						<Form.Input
							type="email"
							placeholder="Enter school email"
							className="h-[60px] rounded-[10px] border-2 border-school-gray px-8 text-[14px]
								md:h-[75px] md:rounded-[20px] md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Item>

					<button
						disabled={!methods.formState.isValid || methods.formState.isSubmitting}
						type="submit"
						className={cnMerge(
							`flex min-w-[77px] max-w-fit items-center justify-center gap-3 self-end rounded-[4px]
							bg-school-blue px-3 py-[6px] text-[14px] font-semibold text-white md:rounded-[8px]
							md:px-5 md:py-2 md:text-[18px]`,
							!methods.formState.isValid && "cursor-not-allowed bg-gray-400"
						)}
					>
						Next
						<IconBox icon="material-symbols:arrow-forward-ios-rounded" />
					</button>
				</Form.Root>
			</section>
		</Main>
	);
}

export default PersonalInfoPage;
