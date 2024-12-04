import { getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { useQueryClientStore } from "@/store/react-query/queryClientStore";
import { classesQuery, studentsByClassQuery } from "@/store/react-query/queryFactory";
import { useViewStudentFormStore } from "@/store/zustand/viewStudentFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

	const classesQueryResult = useQuery(classesQuery());

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
					<Form.Item<typeof methods.control> name="class" className="w-full gap-4">
						<Form.Label className="font-medium">Choose class</Form.Label>

						<Form.Controller
							render={({ field }) => (
								<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
									<Select.Trigger
										classNames={{
											base: `h-[75px] rounded-[20px] border-2 border-school-gray bg-white px-8
											text-[14px] data-[placeholder]:text-school-gray md:text-base`,
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
					</Form.Item>

					<div className="flex gap-6 self-end">
						<button
							type="reset"
							className="max-w-fit rounded-[10px] border border-school-blue bg-white px-8 py-4
								text-[18px] font-bold text-school-blue"
						>
							Cancel
						</button>

						<button
							type="submit"
							className="max-w-fit rounded-[10px] bg-school-blue px-8 py-4 text-[18px] font-bold
								text-white"
						>
							Continue
						</button>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default ViewAllStudentsPage;
