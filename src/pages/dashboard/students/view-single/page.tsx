import { Form } from "@/components/ui";
import { useQueryClientStore } from "@/store/react-query/queryClientStore";
import { studentsByIDQuery } from "@/store/react-query/queryFactory";
import { useViewStudentFormStore } from "@/store/zustand/viewStudentFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Main from "../../_components/Main";

const ViewSingleStudentsSchema = z.object({
	reg_number: z.string().min(1, "Reg number is required"),
});

type ViewSingleStudentsFormData = z.infer<typeof ViewSingleStudentsSchema>;

function ViewSingleStudent() {
	const navigate = useNavigate();

	const methods = useForm<ViewSingleStudentsFormData>({
		defaultValues: {
			reg_number: "",
		},
		resolver: zodResolver(ViewSingleStudentsSchema),
	});

	const onSubmit = async (data: ViewSingleStudentsFormData) => {
		useViewStudentFormStore.setState({ studentId: data.reg_number });

		await useQueryClientStore.getState().queryClient.prefetchQuery(studentsByIDQuery(data.reg_number));

		// FIXME - Redirect to table
		void navigate("./table");
	};

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[30px] font-bold">View Student</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-[56px]"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Item<typeof methods.control> name="reg_number" className="w-full gap-4">
						<Form.Label className="font-medium">Reg. Number*</Form.Label>

						<Form.Input
							placeholder="Enter student's reg number"
							className="h-[75px] rounded-[20px] border-2 border-school-gray bg-white px-8
								text-[14px] md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Item>

					<Form.ErrorMessage type="root" errorField="serverError" className="text-red-600" />

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

export default ViewSingleStudent;
