import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
import { cnMerge } from "@/lib/utils/cn";
import { useQueryClientStore } from "@/store/react-query/queryClientStore";
import { allClassesInSchoolQuery, allClassesQuery } from "@/store/react-query/queryFactory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Main from "../_components/Main";

const RegisterClassSchema = z.object({
	grade: z.string().min(1, "Grade is required"),
	school_class: z.string().min(1, "School class is required"),
});

type RegisterClassFormData = z.infer<typeof RegisterClassSchema>;

function RegisterClassPage() {
	const methods = useForm<RegisterClassFormData>({
		defaultValues: {
			grade: "",
			school_class: "",
		},
		resolver: zodResolver(RegisterClassSchema),
	});

	const allClassesQueryResult = useQuery(allClassesQuery());

	const [ClassList] = getElementList("base");

	const onSubmit = async (data: RegisterClassFormData) => {
		await callBackendApi("/school/classes", {
			body: data,
			meta: {
				toast: {
					success: true,
				},
			},
			method: "POST",

			onResponseError: (ctx) => {
				methods.setError("root.serverError", {
					message: ctx.error.errorData.errors?.message,
				});
			},

			onSuccess: () => {
				methods.resetField("grade");

				void useQueryClientStore
					.getState()
					.queryClient.invalidateQueries({ queryKey: allClassesInSchoolQuery().queryKey });
			},
		});
	};

	const watchedSchoolClass = methods.watch("school_class");

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[30px] font-bold">Register Class</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-8"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Field<typeof methods.control> name="school_class" className="gap-4">
						<Form.Label className="font-medium">Class Name</Form.Label>

						<Form.FieldController
							render={({ field }) => (
								<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
									<Select.Trigger
										classNames={{
											base: `border-school-gray data-placeholder:text-school-gray h-[75px]
											rounded-[20px] border-2 bg-white px-8 text-[14px] md:text-base`,
											icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
										}}
									>
										<Select.Value placeholder="Choose class" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: "bg-white/90 p-0 backdrop-blur-lg",
											viewport: "gap-1",
										}}
									>
										<ClassList
											each={allClassesQueryResult.data?.data ?? []}
											render={(item) => (
												<Select.Item
													key={item}
													value={item}
													className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
														focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
												>
													{item}
												</Select.Item>
											)}
										/>
									</Select.Content>
								</Select.Root>
							)}
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.Field<typeof methods.control> name="grade" className="gap-4">
						<Form.Label className="font-medium">Class Grade</Form.Label>

						<Form.InputGroup
							className="border-school-gray h-[75px] w-full gap-4 rounded-[20px] border-2 bg-white
								px-8 text-[14px] md:text-base"
						>
							<Form.InputLeftItem className="shrink-0">{watchedSchoolClass}</Form.InputLeftItem>

							<Form.Input
								placeholder="Enter grades A-Z"
								maxLength={1}
								onChange={(event) => {
									const input = event.target;

									input.value = input.value.toUpperCase();
								}}
							/>
						</Form.InputGroup>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.ErrorMessage type="root" errorField="serverError" className="text-red-600" />

					<button
						disabled={methods.formState.isSubmitting}
						type="submit"
						className={cnMerge(
							`bg-school-blue mt-12 flex h-[56px] w-full max-w-[150px] items-center justify-center
							self-end rounded-[10px] text-[18px] font-bold text-white`
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

export default RegisterClassPage;
