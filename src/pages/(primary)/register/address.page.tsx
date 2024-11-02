import { IconBox } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { type StepTwoData, initialFormState, useFormStore } from "@/store/formStore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Main from "../_components/Main";

function AddressPage() {
	const methods = useForm({
		defaultValues: initialFormState.formStepData,
	});

	const navigate = useNavigate();

	const { updateFormData } = useFormStore((state) => state.actions);

	const onSubmit = (data: StepTwoData) => {
		updateFormData(data);

		navigate("/register/address");
	};

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
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Item<typeof methods.control> name="nationality" className="gap-4">
						<Form.Label className="text-[14px] font-semibold md:text-base">
							School nationality
						</Form.Label>

						<Form.Controller
							render={({ field }) => (
								<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
									<Select.Trigger
										classNames={{
											base: `h-[60px] rounded-[10px] border-2 border-school-gray px-8
											text-[14px] md:h-[75px] md:rounded-[20px] md:text-base`,
											icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
										}}
									>
										<Select.Value placeholder="Choose school nationality" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: `border-medinfo-primary-main border-[1.4px] bg-white/90 p-0
											backdrop-blur-lg`,
											viewport: "gap-1",
										}}
									>
										<Select.Item
											value="male"
											className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
												focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
										>
											Male
										</Select.Item>
										<Select.Item
											value="female"
											className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
												focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
										>
											Female
										</Select.Item>
									</Select.Content>
								</Select.Root>
							)}
						/>
					</Form.Item>

					<Form.Item<typeof methods.control> name="address" className="gap-4">
						<Form.Label className="text-[14px] font-semibold md:text-base">
							School Address
						</Form.Label>

						<Form.Input
							placeholder="Enter school address"
							className="h-[60px] rounded-[10px] border-2 border-school-gray px-8 text-[14px]
								md:h-[75px] md:rounded-[20px] md:text-base"
						/>
					</Form.Item>

					<div className="flex justify-between md:gap-[75px]">
						<Form.Item<typeof methods.control>
							name="state"
							className="w-full max-w-[170px] gap-4 md:max-w-full"
						>
							<Form.Label className="font-medium">State</Form.Label>

							<Form.Controller
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `h-[60px] rounded-[10px] border-2 border-school-gray px-8
												text-[14px] md:h-[75px] md:rounded-[20px] md:text-base`,
												icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose state" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: `border-medinfo-primary-main border-[1.4px] bg-white/90 p-0
												backdrop-blur-lg`,
												viewport: "gap-1",
											}}
										>
											<Select.Item
												value="male"
												className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
													focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
											>
												Male
											</Select.Item>
											<Select.Item
												value="female"
												className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
													focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
											>
												Female
											</Select.Item>
										</Select.Content>
									</Select.Root>
								)}
							/>
						</Form.Item>

						<Form.Item<typeof methods.control>
							name="name"
							className="w-full max-w-[170px] gap-4 md:max-w-full"
						>
							<Form.Label className="font-semibold">City</Form.Label>

							<Form.Controller
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `h-[60px] rounded-[10px] border-2 border-school-gray px-8
												text-[14px] md:h-[75px] md:rounded-[20px] md:text-base`,
												icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose city" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: `border-medinfo-primary-main border-[1.4px] bg-white/90 p-0
												backdrop-blur-lg`,
												viewport: "gap-1",
											}}
										>
											<Select.Item
												value="steeze"
												className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
													focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
											>
												Steeze
											</Select.Item>
											<Select.Item
												value="cooking"
												className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
													focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
											>
												Cooking
											</Select.Item>
										</Select.Content>
									</Select.Root>
								)}
							/>
						</Form.Item>
					</div>

					<div className="flex justify-between md:gap-[75px]">
						<Form.Item<typeof methods.control>
							name="local_govt"
							className="w-full max-w-[170px] gap-4 md:max-w-full"
						>
							<Form.Label className="font-medium">LGA</Form.Label>

							<Form.Controller
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `h-[60px] rounded-[10px] border-2 border-school-gray px-8
												text-[14px] md:h-[75px] md:rounded-[20px] md:text-base`,
												icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose state" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: `border-medinfo-primary-main border-[1.4px] bg-white/90 p-0
												backdrop-blur-lg`,
												viewport: "gap-1",
											}}
										>
											<Select.Item
												value="male"
												className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
													focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
											>
												Male
											</Select.Item>
											<Select.Item
												value="female"
												className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
													focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
											>
												Female
											</Select.Item>
										</Select.Content>
									</Select.Root>
								)}
							/>
						</Form.Item>

						<Form.Item<typeof methods.control>
							name="postal_code"
							className="w-full max-w-[170px] gap-4 md:max-w-full"
						>
							<Form.Label className="font-semibold">School postal code</Form.Label>

							<Form.Input
								type="number"
								placeholder="Enter school postal code"
								className="h-[60px] rounded-[10px] border-2 border-school-gray px-8 text-[14px]
									md:h-[75px] md:rounded-[20px] md:text-base"
							/>
						</Form.Item>
					</div>

					<div className="mt-5 flex gap-4 self-end">
						<button
							type="button"
							className="flex max-w-fit items-center gap-3 rounded-[4px] border-[3px]
								border-[hsl(0,0%,26%)] px-3 py-[6px] text-[14px] font-semibold text-[hsl(0,0%,13%)]
								md:rounded-[8px] md:px-5 md:py-2 md:text-[18px]"
							onClick={() => navigate("/register/personal-info")}
						>
							<IconBox icon="material-symbols:arrow-forward-ios-rounded" className="rotate-180" />
							Back
						</button>
						<button
							type="submit"
							className="flex max-w-fit items-center gap-3 rounded-[4px] bg-school-blue px-3
								py-[6px] text-[14px] font-semibold text-white md:rounded-[8px] md:px-5 md:py-2
								md:text-[18px]"
						>
							Next
							<IconBox icon="material-symbols:arrow-forward-ios-rounded" />
						</button>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default AddressPage;
