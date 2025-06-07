import { IconBox, Show, getElementList } from "@/components/common";
import { Command, Form, Popover } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { z } from "@/lib/zod";
import { useQueryClientStore } from "@/store/react-query/queryClientStore";
import { allClassesInSchoolQuery, allClassesQuery } from "@/store/react-query/queryFactory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Main } from "../_components/Main";

const RegisterClassSchema = z.object({
	grade: z.string().min(1, "Grade is required").max(1, "Grade must be a single character"),
	school_class: z.string().min(1, "School class is required"),
});

function RegisterClassPage() {
	const methods = useForm({
		defaultValues: {
			grade: "",
			school_class: "",
		},
		mode: "onChange",
		resolver: zodResolver(RegisterClassSchema),
	});

	const allClassesQueryResult = useQuery(allClassesQuery());

	const [ClassList] = getElementList("base");

	const onSubmit = methods.handleSubmit(async (data) => {
		await callBackendApi("/school/classes", {
			body: data,
			meta: { toast: { success: true } },
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
	});

	const watchedSchoolClass = methods.watch("school_class");

	return (
		<Main className="flex flex-col gap-6 md:gap-8">
			<header>
				<h1 className="text-[24px] font-bold md:text-[30px]">Register Class</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-6 md:gap-8"
					onSubmit={(event) => void onSubmit(event)}
				>
					<Form.Field<typeof methods.control> name="school_class" className="gap-3 md:gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">Class Name</Form.Label>

						<Form.FieldController
							render={({ field }) => (
								<Popover.Root>
									<Popover.Trigger
										className={cnJoin(
											`flex h-[48px] items-center justify-between rounded-[8px] border-2
											border-school-gray bg-white px-4 text-[12px]
											data-placeholder:text-school-gray md:h-[75px] md:rounded-[20px] md:px-8
											md:text-base md:text-[14px]`,
											!(field.value as boolean) && "text-shadcn-muted-foreground"
										)}
									>
										<Show.Root when={field.value} fallback="Select class">
											{allClassesQueryResult.data?.data?.find(
												(school_class) => school_class === field.value
											)}
										</Show.Root>

										<IconBox
											icon="lucide:chevrons-up-down"
											className="size-5 text-school-gray md:size-6"
										/>
									</Popover.Trigger>

									<Popover.Content className="bg-white/90 p-0 backdrop-blur-lg">
										<Command.Root>
											<Command.Input placeholder="Choose class" className="h-9" />

											<Command.List>
												<Command.Empty>No class found.</Command.Empty>

												<Command.Group>
													<ClassList
														each={allClassesQueryResult.data?.data ?? []}
														render={(item) => (
															<Command.Item
																key={item}
																value={item}
																onSelect={() => field.onChange(item)}
																className="h-12 bg-gray-200 text-[12px] font-medium
																	text-black focus:bg-gray-300 focus:text-black
																	data-[selected=true]:bg-gray-300 md:text-base"
															>
																<p>{item}</p>
																<IconBox
																	icon="lucide:check"
																	className={cnJoin(
																		"ml-auto size-[14px]",
																		item === field.value ? "opacity-100" : "opacity-0"
																	)}
																/>
															</Command.Item>
														)}
													/>
												</Command.Group>
											</Command.List>
										</Command.Root>
									</Popover.Content>
								</Popover.Root>
							)}
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.Field<typeof methods.control> name="grade" className="gap-3 md:gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">Class Grade</Form.Label>

						<Form.InputGroup
							className="h-[48px] gap-3.5 rounded-[8px] border-2 border-school-gray bg-white px-4
								text-[12px] data-placeholder:text-school-gray md:h-[75px] md:rounded-[20px] md:px-8
								md:text-base"
						>
							<Form.InputLeftItem className="shrink-0">{watchedSchoolClass}</Form.InputLeftItem>

							<Form.Input
								placeholder="Enter grades A-Z"
								className="text-[size:inherit]"
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

export default RegisterClassPage;
