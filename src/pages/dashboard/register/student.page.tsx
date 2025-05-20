import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { z } from "@/lib/zod";
import { useQueryClientStore } from "@/store/react-query/queryClientStore";
import { allClassesInSchoolQuery, allStudentsInSchoolQuery } from "@/store/react-query/queryFactory";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
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
		mode: "onChange",
		resolver: standardSchemaResolver(RegisterStudentSchema),
	});

	const [ClassesList] = getElementList("base");

	const classesQueryResult = useQuery(allClassesInSchoolQuery());

	const onSubmit = async (data: RegisterStudentFormData) => {
		const { other_names, surname, ...restOfData } = data;

		await callBackendApi("/school/students", {
			body: {
				...restOfData,
				name: `${surname} ${other_names}`,
			},
			meta: { toast: { success: true } },
			method: "POST",

			onResponseError: (ctx) => {
				methods.setError("root.serverError", {
					message: ctx.error.errorData.errors?.message,
				});
			},

			onSuccess: () => {
				methods.reset();

				void useQueryClientStore
					.getState()
					.queryClient.invalidateQueries({ queryKey: allStudentsInSchoolQuery().queryKey });
			},
		});
	};

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[24px] font-bold md:text-[30px]">Register Student</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-6 md:gap-8"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Field<typeof methods.control> name="surname" className="gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">Surname*</Form.Label>

						<Form.Input
							placeholder="Enter student's surname"
							className="h-[48px] gap-3.5 rounded-[8px] border-2 border-school-gray bg-white px-4
								text-[12px] data-placeholder:text-school-gray md:h-[75px] md:rounded-[20px] md:px-8
								md:text-base"
						/>

						<Form.ErrorMessage control={methods.control} className="text-red-600" />
					</Form.Field>

					<Form.Field<typeof methods.control> name="other_names" className="gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">Other Names*</Form.Label>

						<Form.Input
							placeholder="Enter student's other names"
							className="h-[48px] gap-3.5 rounded-[8px] border-2 border-school-gray bg-white px-4
								text-[12px] data-placeholder:text-school-gray md:h-[75px] md:rounded-[20px] md:px-8
								md:text-base"
						/>

						<Form.ErrorMessage control={methods.control} className="text-red-600" />
					</Form.Field>

					<div className="flex gap-6 md:gap-[70px]">
						<Form.Field<typeof methods.control> name="gender" className="w-full min-w-0 gap-4">
							<Form.Label className="text-[14px] font-medium md:text-base">Gender</Form.Label>

							<Form.FieldController
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `h-[48px] rounded-[8px] border-2 border-school-gray bg-white px-4
												text-[12px] data-placeholder:text-school-gray md:h-[75px]
												md:rounded-[20px] md:px-8 md:text-base md:text-[14px]`,
												icon: "text-school-gray group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose student's gender" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: "bg-white/90 p-0 backdrop-blur-lg",
												viewport: "gap-1",
											}}
										>
											<Select.Item
												value="Male"
												className="h-12 bg-gray-200 text-[12px] font-medium text-black
													focus:bg-gray-300 focus:text-black data-[state=checked]:bg-gray-300
													md:text-base"
											>
												Male
											</Select.Item>
											<Select.Item
												value="Female"
												className="h-12 bg-gray-200 text-[12px] font-medium text-black
													focus:bg-gray-300 focus:text-black data-[state=checked]:bg-gray-300
													md:text-base"
											>
												Female
											</Select.Item>
										</Select.Content>
									</Select.Root>
								)}
							/>

							<Form.ErrorMessage control={methods.control} className="text-red-600" />
						</Form.Field>

						<Form.Field<typeof methods.control> name="school_class" className="w-full min-w-0 gap-4">
							<Form.Label className="text-[14px] font-medium md:text-base">Class</Form.Label>

							<Form.FieldController
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `h-[48px] rounded-[8px] border-2 border-school-gray bg-white px-4
												text-[12px] data-placeholder:text-school-gray md:h-[75px]
												md:rounded-[20px] md:px-8 md:text-base md:text-[14px]`,
												icon: "text-school-gray group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose student's class" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: "bg-white/90 p-0 backdrop-blur-lg",
												viewport: "gap-1",
											}}
										>
											<ClassesList
												each={classesQueryResult.data?.data ?? []}
												render={(item) => (
													<Select.Item
														key={`${item.school_class} ${item.grade}`}
														value={`${item.school_class} ${item.grade}`}
														className="h-12 bg-gray-200 text-[12px] font-medium text-black
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
						</Form.Field>
					</div>

					<Form.Submit
						disabled={methods.formState.isSubmitting || !methods.formState.isValid}
						className={cnMerge(
							`mt-12 flex h-9 w-fit items-center justify-center self-end rounded-[10px]
							bg-school-blue px-5 text-[14px] font-semibold text-white md:h-[56px] md:px-8
							md:text-[18px]`,
							!methods.formState.isValid && "cursor-not-allowed bg-gray-400",
							methods.formState.isSubmitting && "grid"
						)}
					>
						{methods.formState.isSubmitting && (
							<span className="flex justify-center [grid-area:1/1]">
								<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
							</span>
						)}
						<p className={cnJoin(methods.formState.isSubmitting && "invisible [grid-area:1/1]")}>
							Register
						</p>
					</Form.Submit>
				</Form.Root>
			</section>
		</Main>
	);
}

export default RegisterStudentPage;
