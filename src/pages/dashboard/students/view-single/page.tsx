import { IconBox } from "@/components/common";
import { Form } from "@/components/ui";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { useQueryClientStore } from "@/store/react-query/queryClientStore";
import { studentsByIDQuery } from "@/store/react-query/queryFactory";
import { useViewStudentFormStore } from "@/store/zustand/viewStudentFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
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

	const onSubmit = methods.handleSubmit(async (data) => {
		useViewStudentFormStore.setState({ studentId: data.reg_number });

		await useQueryClientStore.getState().queryClient.prefetchQuery(
			studentsByIDQuery({
				onSuccess: () => void navigate("./table"),
				studentId: data.reg_number,
			})
		);
	});

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[24px] font-bold md:text-[30px]">View Student</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-10 md:gap-[56px]"
					onSubmit={(event) => void onSubmit(event)}
				>
					<Form.Field<typeof methods.control> name="reg_number" className="w-full gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">Reg. Number*</Form.Label>

						<Form.Input
							placeholder="Enter student's reg number"
							className="border-school-gray data-placeholder:text-school-gray h-[48px] gap-3.5
								rounded-[8px] border-2 bg-white px-4 text-[12px] md:h-[75px] md:rounded-[20px]
								md:px-8 md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.ErrorMessage type="root" errorField="serverError" className="text-red-600" />

					<div className="flex gap-6 self-end">
						<button
							type="reset"
							className="border-school-blue text-school-blue flex h-9 w-fit items-center
								justify-center self-end rounded-[10px] border bg-white px-5 text-[14px]
								font-semibold md:h-[56px] md:px-8 md:text-[18px]"
						>
							Cancel
						</button>

						<Form.Submit
							disabled={methods.formState.isSubmitting}
							className={cnMerge(
								`bg-school-blue flex h-9 w-fit items-center justify-center self-end rounded-[10px]
								px-5 text-[14px] font-semibold text-white md:h-[56px] md:px-8 md:text-[18px]`,
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
								Continue
							</p>
						</Form.Submit>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default ViewSingleStudent;
