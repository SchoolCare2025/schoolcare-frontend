import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
import { cnMerge } from "@/lib/utils/cn";
import { useQueryClientStore } from "@/store/react-query/queryClientStore";
import { allSubjectsInSchoolQuery, allSubjectsQuery } from "@/store/react-query/queryFactory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Main from "../_components/Main";

const RegisterSubjectSchema = z.object({
	subject: z.string().min(1, "Subject is required"),
});

type RegisterSubjectFormData = z.infer<typeof RegisterSubjectSchema>;

function RegisterSubjectPage() {
	const methods = useForm<RegisterSubjectFormData>({
		defaultValues: {
			subject: "",
		},
		resolver: zodResolver(RegisterSubjectSchema),
	});

	const [SubjectList] = getElementList("base");

	const subjectQueryResult = useQuery(allSubjectsQuery());

	const onSubmit = async (data: RegisterSubjectFormData) => {
		await callBackendApi("/school/subjects", {
			body: data,
			method: "POST",

			onResponseError: (ctx) => {
				methods.setError("root.serverError", {
					message: ctx.error.errorData.errors?.message,
				});
			},

			onSuccess: () => {
				methods.reset();

				void useQueryClientStore.getState().queryClient.invalidateQueries({
					queryKey: allSubjectsInSchoolQuery().queryKey,
				});
			},
		});
	};

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[24px] font-bold md:text-[30px]">Register Subjects</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-6 md:gap-8"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Field<typeof methods.control> name="subject" className="gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">Select Subject</Form.Label>

						<Form.FieldController
							render={({ field }) => (
								<Select.Root name={field.name} onValueChange={field.onChange}>
									<Select.Trigger
										classNames={{
											base: `border-school-gray data-placeholder:text-school-gray h-[48px]
											rounded-[8px] border-2 bg-white px-4 text-[12px] md:h-[75px]
											md:rounded-[20px] md:px-8 md:text-base md:text-[14px]`,
											icon: "text-school-gray group-data-[state=open]:rotate-180 md:size-6",
										}}
									>
										<Select.Value placeholder="Choose Subject" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: "bg-white/90 p-0 backdrop-blur-lg",
											viewport: "gap-1",
										}}
									>
										<SubjectList
											each={subjectQueryResult.data?.data ?? []}
											render={(item) => (
												<Select.Item
													key={item}
													value={item}
													className="h-12 bg-gray-200 text-[12px] font-medium text-black
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

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.ErrorMessage type="root" errorField="serverError" className="text-red-600" />

					<Form.Submit
						disabled={methods.formState.isSubmitting}
						className={cnMerge(
							`bg-school-blue mt-12 flex h-9 w-fit items-center justify-center self-end
							rounded-[10px] px-5 text-[14px] font-semibold text-white md:h-[56px] md:px-8
							md:text-[18px]`,
							!methods.formState.isValid && "cursor-not-allowed bg-gray-400"
						)}
					>
						{methods.formState.isSubmitting ? (
							<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
						) : (
							"Register"
						)}
					</Form.Submit>
				</Form.Root>
			</section>
		</Main>
	);
}

export default RegisterSubjectPage;
