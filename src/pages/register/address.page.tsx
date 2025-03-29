import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
import { nigeriaStatesAndLGA } from "@/lib/api/nigeria";
import { cnMerge } from "@/lib/utils/cn";
import { useRegisterFormStore } from "@/store/zustand/registerFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import Main from "../_components/Main";

const AddressSchema = z.object({
	address: z.string().min(1, "Address is required"),
	local_govt: z.string().min(1, "LGA is required"),
	nationality: z.string().min(1, "Nationality is required"),
	postal_code: z
		.string()
		.min(1, "Postal code is required")
		.min(6, "Postal code must be at least 6 digits"),
	state: z.string().min(1, "State is required"),
});

function AddressPage() {
	const {
		actions: { resetFormStore, updateFormData },
		formStepData,
	} = useRegisterFormStore((state) => state);

	const methods = useForm({
		defaultValues: formStepData,
		mode: "onChange",
		resolver: zodResolver(AddressSchema),
	});

	const navigate = useNavigate();

	const onSubmit = methods.handleSubmit(async (stepTwoData) => {
		updateFormData(stepTwoData);

		await callBackendApi("/school/register", {
			body: { ...formStepData, ...stepTwoData },
			meta: {
				toast: { success: true },
			},
			method: "POST",

			onSuccess: () => {
				resetFormStore();
				void navigate("/");
			},
		});
	});

	const state = methods.watch("state");

	const LGAResult = nigeriaStatesAndLGA.find((item) => item.state === state)?.lgas ?? [];

	const [StateList] = getElementList("base");

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[18px] font-bold md:text-[30px]">Tell us more about your school</h1>
				<p className="mt-2 text-[10px] md:text-[18px]">Please fill in the details below</p>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="mt-3 gap-8 md:gap-[56px]"
					onSubmit={(event) => void onSubmit(event)}
				>
					<Form.Field<typeof methods.control> name="nationality" className="gap-4">
						<Form.Label className="text-[14px] font-semibold md:text-base">
							School nationality
						</Form.Label>

						<Form.FieldController
							render={({ field }) => (
								<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
									<Select.Trigger
										classNames={{
											base: `border-school-gray h-[60px] rounded-[10px] border-2 px-8
											text-[14px] md:h-[75px] md:rounded-[20px] md:text-base`,
											icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
										}}
									>
										<Select.Value placeholder="Choose school nationality" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: "bg-white/90 p-0 backdrop-blur-lg",
											viewport: "gap-1",
										}}
									>
										<Select.Item
											value="Nigeria"
											className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
												focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
										>
											Nigeria
										</Select.Item>
									</Select.Content>
								</Select.Root>
							)}
						/>

						<Form.ErrorMessage control={methods.control} className="text-red-600" />
					</Form.Field>

					<Form.Field<typeof methods.control> name="address" className="gap-4">
						<Form.Label className="text-[14px] font-semibold md:text-base">
							School Address
						</Form.Label>

						<Form.Input
							placeholder="Enter school address"
							className="border-school-gray h-[60px] rounded-[10px] border-2 px-8 text-[14px]
								md:h-[75px] md:rounded-[20px] md:text-base"
						/>

						<Form.ErrorMessage control={methods.control} className="text-red-600" />
					</Form.Field>

					<Form.Field<typeof methods.control> name="state" className="w-full gap-4">
						<Form.Label className="font-medium">State</Form.Label>

						<Form.FieldController
							render={({ field }) => (
								<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
									<Select.Trigger
										classNames={{
											base: `border-school-gray h-[60px] rounded-[10px] border-2 px-8
											text-[14px] md:h-[75px] md:rounded-[20px] md:text-base`,
											icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
										}}
									>
										<Select.Value placeholder="Choose state" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: "bg-white/90 p-0 backdrop-blur-lg",
											viewport: "gap-1",
										}}
									>
										<StateList
											each={nigeriaStatesAndLGA}
											render={(item) => (
												<Select.Item
													key={item.state}
													value={item.state}
													className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
														focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
												>
													{item.state}
												</Select.Item>
											)}
										/>
									</Select.Content>
								</Select.Root>
							)}
						/>

						<Form.ErrorMessage control={methods.control} className="text-red-600" />
					</Form.Field>

					<div className="flex justify-between gap-10 md:gap-[75px]">
						<Form.Field<typeof methods.control> name="local_govt" className="w-full gap-4">
							<Form.Label className="font-medium">LGA</Form.Label>

							<Form.FieldController
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `border-school-gray h-[60px] rounded-[10px] border-2 px-8
												text-[14px] md:h-[75px] md:rounded-[20px] md:text-base`,
												icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose LGA" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: "bg-white/90 p-0 backdrop-blur-lg",
												viewport: "gap-1",
											}}
										>
											<StateList
												each={LGAResult}
												render={(item) => (
													<Select.Item
														key={item}
														value={item}
														className="h-12 bg-gray-200 font-medium text-black
															focus:bg-gray-300 focus:text-black
															data-[state=checked]:bg-gray-300 md:text-base"
													>
														{item}
													</Select.Item>
												)}
											/>
										</Select.Content>
									</Select.Root>
								)}
							/>

							<Form.ErrorMessage control={methods.control} className="text-red-600" />
						</Form.Field>

						<Form.Field<typeof methods.control> name="postal_code" className="w-full gap-4">
							<Form.Label className="font-semibold">School postal code</Form.Label>

							<Form.Input
								type="number"
								placeholder="Enter school postal code"
								className="border-school-gray h-[60px] rounded-[10px] border-2 px-8 text-[14px]
									md:h-[75px] md:rounded-[20px] md:text-base"
							/>

							<Form.ErrorMessage control={methods.control} className="text-red-600" />
						</Form.Field>
					</div>

					<div className="mt-5 flex gap-4 self-end">
						<button
							type="button"
							className="flex max-w-fit items-center gap-3 rounded-[4px] border-2
								border-[hsl(0,0%,26%)] px-3 py-[6px] text-[14px] font-semibold text-[hsl(0,0%,13%)]
								md:rounded-[8px] md:px-5 md:py-2 md:text-[18px]"
							onClick={() => void navigate("/register/personal-info")}
						>
							<IconBox icon="material-symbols:arrow-forward-ios-rounded" className="rotate-180" />
							Back
						</button>

						<button
							disabled={methods.formState.isSubmitting || !methods.formState.isValid}
							type="submit"
							className={cnMerge(
								`bg-school-blue flex max-w-fit min-w-[77px] items-center justify-center gap-3
								rounded-[4px] px-3 py-[6px] text-[14px] font-semibold text-white md:rounded-[8px]
								md:px-5 md:py-2 md:text-[18px]`,
								!methods.formState.isValid && "cursor-not-allowed bg-gray-400"
							)}
						>
							{methods.formState.isSubmitting ? (
								<IconBox icon="svg-spinners:6-dots-rotate" className="size-5" />
							) : (
								"Submit"
							)}
						</button>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default AddressPage;
