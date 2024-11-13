import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { type ClassGradeData, callBackendApi } from "@/lib/api/callBackendApi";
import { cnMerge } from "@/lib/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Main from "../_components/Main";

const RegisterStudentSchema = z.object({
	gender: z.string().min(1, "Gender is required"),
	other_names: z.string().min(1, "Please enter other names"),
	school_class: z.string().min(1, "Please choose the student's class"),
	surname: z.string().min(1, "Surname is required"),
});

type RegisterStudentFormData = z.infer<typeof RegisterStudentSchema>;

function RegisterStudentPage() {
	const methods = useForm<RegisterStudentFormData>({
		defaultValues: {
			gender: "",
			other_names: "",
			school_class: "",
			surname: "",
		},
		mode: "onTouched",
		resolver: zodResolver(RegisterStudentSchema),
	});

	const [ClassGradeList] = getElementList("base");

	const classGradeQueryResult = useQuery({
		queryFn: () => {
			return callBackendApi<ClassGradeData[], unknown, "onlySuccess">("/school/class-grades", {
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		queryKey: ["class-grades"],
		staleTime: Infinity,
	});

	const navigate = useNavigate();

	const onSubmit = async (data: RegisterStudentFormData) => {
		const { other_names, surname, ...restOfData } = data;

		await callBackendApi("/school/students", {
			body: {
				...restOfData,
				name: `${surname} ${other_names}`,
			},
			method: "POST",

			onSuccess: () => navigate("/dashboard"),
		});
	};

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[30px] font-bold">Register Student</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-[56px]"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Item<typeof methods.control> name="surname" className="gap-4">
						<Form.Label className="font-medium">Surname*</Form.Label>

						<Form.Input
							placeholder="Enter student's surname"
							className="h-[75px] rounded-[20px] border-2 border-school-gray bg-white px-8
								text-[14px] md:text-base"
						/>

						<Form.ErrorMessage control={methods.control} className="text-red-600" />
					</Form.Item>

					<Form.Item<typeof methods.control> name="other_names" className="gap-4">
						<Form.Label className="font-medium">Other Names*</Form.Label>

						<Form.Input
							placeholder="Enter student's other names"
							className="h-[75px] rounded-[20px] border-2 border-school-gray bg-white px-8
								text-[14px] md:text-base"
						/>

						<Form.ErrorMessage control={methods.control} className="text-red-600" />
					</Form.Item>

					<div className="flex gap-[70px]">
						<Form.Item<typeof methods.control> name="gender" className="w-full gap-4">
							<Form.Label className="font-medium">Gender</Form.Label>

							<Form.Controller
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `h-[75px] rounded-[20px] border-2 border-school-gray bg-white
												px-8 text-[14px] data-[placeholder]:text-school-gray md:text-base`,
												icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose student's gender" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: `border-medinfo-primary-main border-[1.4px] bg-white/90 p-0
												backdrop-blur-lg`,
												viewport: "gap-1",
											}}
										>
											<Select.Item
												value="Male"
												className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
													focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
											>
												Male
											</Select.Item>
											<Select.Item
												value="Female"
												className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
													focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
											>
												Female
											</Select.Item>
										</Select.Content>
									</Select.Root>
								)}
							/>

							<Form.ErrorMessage control={methods.control} className="text-red-600" />
						</Form.Item>

						<Form.Item<typeof methods.control> name="school_class" className="w-full gap-4">
							<Form.Label className="font-medium">Class</Form.Label>

							<Form.Controller
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `h-[75px] rounded-[20px] border-2 border-school-gray bg-white
												px-8 text-[14px] data-[placeholder]:text-school-gray md:text-base`,
												icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose student's class" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: `border-medinfo-primary-main border-[1.4px] bg-white/90 p-0
												backdrop-blur-lg`,
												viewport: "gap-1",
											}}
										>
											<ClassGradeList
												each={classGradeQueryResult.data?.data ?? []}
												render={(item) => (
													<Select.Item
														value={`${item.school_class} ${item.grade}`}
														className="h-12 bg-gray-200 font-medium text-black
															focus:bg-gray-300 focus:text-black
															data-[state=checked]:bg-gray-300 md:text-base"
													>
														{item.school_class} {item.grade}
													</Select.Item>
												)}
											/>
										</Select.Content>
									</Select.Root>
								)}
							/>

							<Form.ErrorMessage control={methods.control} className="text-red-600" />
						</Form.Item>
					</div>

					<button
						disabled={methods.formState.isSubmitting || !methods.formState.isValid}
						type="submit"
						className={cnMerge(
							`flex h-[56px] w-full max-w-[150px] items-center justify-center self-center
							rounded-[10px] bg-school-blue text-[18px] font-bold text-white`,
							!methods.formState.isValid && "cursor-not-allowed bg-gray-400"
						)}
					>
						{methods.formState.isSubmitting ? (
							<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
						) : (
							"Register"
						)}
					</button>
				</Form.Root>
			</section>
		</Main>
	);
}

export default RegisterStudentPage;
