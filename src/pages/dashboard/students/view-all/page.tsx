import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { useQueryClientStore } from "@/store/react-query/queryClientStore";
import { allClassesInSchoolQuery, studentsByClassQuery } from "@/store/react-query/queryFactory";
import { useViewStudentFormStore } from "@/store/zustand/viewStudentFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import Main from "../../_components/Main";

const ViewAllStudentsSchema = z.object({
	class: z.string().min(1, "Class is required"),
});

type ViewAllStudentsFormData = z.infer<typeof ViewAllStudentsSchema>;

export function ViewAllStudentsPage() {
	const navigate = useNavigate();

	const methods = useForm<ViewAllStudentsFormData>({
		defaultValues: {
			class: "",
		},
		resolver: zodResolver(ViewAllStudentsSchema),
	});

	const classesQueryResult = useQuery(allClassesInSchoolQuery());

	const [ClassesList] = getElementList("base");

	const onSubmit = methods.handleSubmit(async (data) => {
		useViewStudentFormStore.setState({ studentClass: data.class });

		await useQueryClientStore.getState().queryClient.prefetchQuery(studentsByClassQuery(data.class));

		void navigate("./table");
	});

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[24px] font-bold md:text-[30px]">View All Students</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-10 md:gap-[56px]"
					onSubmit={(event) => void onSubmit(event)}
				>
					<Form.Field<typeof methods.control> name="class" className="w-full gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">Choose class</Form.Label>

						<Form.FieldController
							render={({ field }) => (
								<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
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
					</Form.Field>

					<div className="flex gap-6 self-end">
						<button
							type="reset"
							className="flex h-9 w-fit items-center justify-center self-end rounded-[10px] border
								border-school-blue bg-white px-5 text-[14px] font-semibold text-school-blue
								md:h-[56px] md:px-8 md:text-[18px]"
						>
							Cancel
						</button>

						<Form.Submit
							disabled={methods.formState.isSubmitting}
							className={cnMerge(
								`flex h-9 w-fit items-center justify-center self-end rounded-[10px] bg-school-blue
								px-5 text-[14px] font-semibold text-white md:h-[56px] md:px-8 md:text-[18px]`,
								methods.formState.isSubmitting && "grid",
								!methods.formState.isValid && "cursor-not-allowed bg-gray-400"
							)}
						>
							{methods.formState.isSubmitting && (
								<span className="flex justify-center [grid-area:1/1]">
									<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
								</span>
							)}
							<p className={cnJoin(methods.formState.isSubmitting && "invisible [grid-area:1/1]")}>
								Continue
							</p>
						</Form.Submit>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default ViewAllStudentsPage;
