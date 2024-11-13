import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { type AllSubjects, callBackendApi } from "@/lib/api/callBackendApi";
import { cnMerge } from "@/lib/utils/cn";
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

	const subjectQueryResult = useQuery({
		queryFn: () => {
			return callBackendApi<AllSubjects, unknown, "onlySuccess">("/main-subject", {
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		queryKey: ["subjects"],
		staleTime: Infinity,
	});

	const onSubmit = async (data: RegisterSubjectFormData) => {
		await callBackendApi("/school/subjects", {
			body: data,
			method: "POST",

			onResponseError: (ctx) => {
				methods.setError("root.serverError", {
					message: ctx.errorData.errors?.message,
				});
			},
		});
	};

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[30px] font-bold">Register Subjects</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-8"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Item<typeof methods.control> name="subject" className="gap-4">
						<Form.Label className="font-medium">Select Subject</Form.Label>

						<Form.Controller
							render={({ field }) => (
								<Select.Root name={field.name} onValueChange={field.onChange}>
									<Select.Trigger
										classNames={{
											base: `h-[75px] rounded-[20px] border-2 border-school-gray bg-white px-8
											text-[14px] data-[placeholder]:text-school-gray md:text-base`,
											icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
										}}
									>
										<Select.Value placeholder="Choose Subject" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: `border-medinfo-primary-main border-[1.4px] bg-white/90 p-0
											backdrop-blur-lg`,
											viewport: "gap-1",
										}}
									>
										<SubjectList
											each={subjectQueryResult.data?.data ?? []}
											render={(item) => (
												<Select.Item
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
					</Form.Item>

					<Form.ErrorMessage type="root" errorField="serverError" className="text-red-600" />

					<button
						disabled={methods.formState.isSubmitting}
						type="submit"
						className={cnMerge(
							`mt-5 flex h-[56px] w-full max-w-[150px] items-center justify-center self-end
							rounded-[10px] bg-school-blue text-[18px] font-bold text-white`
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

export default RegisterSubjectPage;
