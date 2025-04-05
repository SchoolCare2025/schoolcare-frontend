import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { cnMerge } from "@/lib/utils/cn";
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

	const onSubmit = async (data: ViewAllStudentsFormData) => {
		useViewStudentFormStore.setState({ studentClass: data.class });

		await useQueryClientStore.getState().queryClient.prefetchQuery(studentsByClassQuery(data.class));

		void navigate("./table");
	};

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[30px] font-bold">View All Students</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-[56px]"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Field<typeof methods.control> name="class" className="w-full gap-4">
						<Form.Label className="font-medium">Choose class</Form.Label>

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
													className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
														focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
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
							className="border-school-blue text-school-blue max-w-fit rounded-[10px] border
								bg-white px-8 py-4 text-[18px] font-bold"
						>
							Cancel
						</button>

						<button
							disabled={methods.formState.isSubmitting || !methods.formState.isValid}
							type="submit"
							className={cnMerge(
								`bg-school-blue flex w-[150.5px] items-center justify-center rounded-[10px] px-8
								py-4 text-[18px] font-bold text-white`,
								!methods.formState.isValid && "cursor-not-allowed bg-gray-400"
							)}
						>
							{methods.formState.isSubmitting ? (
								<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
							) : (
								"Continue"
							)}
						</button>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default ViewAllStudentsPage;
