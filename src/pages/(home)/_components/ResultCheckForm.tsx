import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { type CheckResultResponse, callBackendApi } from "@/lib/api/callBackendApi";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { z } from "@/lib/zod";
import { schoolSessionQuery, schoolTermQuery } from "@/store/react-query/queryFactory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useStorageState } from "@zayne-labs/toolkit-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const ResultCheckFormSchema = z.object({
	class_grade: z.string().min(1, "Grade level is required"),
	school_class: z.string().min(1, "Class is required"),
	school_ID: z.string().min(1, "School ID is required"),
	scratch_card_code: z.string().min(1, "Scratch card code is required"),
	serial_number: z.string().min(1, "Serial number is required"),
	session: z.string("Session is required"),
	student_reg_number: z.string().min(1, "Reg number is required"),
	term: z.string("Term is required"),
});

const [For] = getElementList("base");

function ResultCheckForm(props: { className?: string }) {
	const { className } = props;

	const { 1: storageActions } = useStorageState<CheckResultResponse | null>("scratch-card-result", null);

	const schoolSessionQueryResult = useQuery(schoolSessionQuery({ meta: { toast: { error: false } } }));
	const schoolTermQueryResult = useQuery(schoolTermQuery({ meta: { toast: { error: false } } }));

	const methods = useForm({
		resolver: zodResolver(ResultCheckFormSchema),
	});

	const navigate = useNavigate();

	const onSubmit = methods.handleSubmit(async (data) => {
		await callBackendApi<CheckResultResponse>("/check-result", {
			body: data,
			meta: {
				skipAuthHeaderAddition: true,
				toast: {
					success: true,
				},
			},
			method: "POST",

			onSuccess: (ctx) => {
				storageActions.setState(ctx.data.data);

				void navigate("/student-result");
			},
		});
	});

	return (
		<Form.Root
			methods={methods}
			onSubmit={(event) => void onSubmit(event)}
			className={cnMerge("rounded-[24px] border-[2px] border-white px-9 py-11", className)}
		>
			<h3 className="text-center text-[14px] font-semibold">Check Result</h3>

			<div className="mt-5.5 grid grid-cols-2 gap-x-7 gap-y-4">
				<Form.Field<typeof methods.control> name="school_ID" className="flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium">School ID</Form.Label>
					<Form.Input
						placeholder="Enter school ID"
						className="rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3 text-[10px]
							data-invalid:border-[hsl(2,84%,59%)]"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="student_reg_number" className="flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium">Reg. Number</Form.Label>
					<Form.Input
						placeholder="e.g: 20246..."
						className="rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3 text-[10px]
							data-invalid:border-[hsl(2,84%,59%)]"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="school_class" className="flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium">Class</Form.Label>
					<Form.Input
						placeholder="e.g: JSS1"
						className="rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3 text-[10px]
							data-invalid:border-[hsl(2,84%,59%)]"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="class_grade" className="flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium">Class Grade</Form.Label>
					<Form.Input
						placeholder="e.g: A"
						className="rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3 text-[10px]
							data-invalid:border-[hsl(2,84%,59%)]"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="session" className="group flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium">Result Session</Form.Label>

					<Form.FieldController
						render={({ field }) => (
							<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
								<Select.Trigger
									classNames={{
										base: `rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3
										text-[10px] group-data-invalid:border-[hsl(2,84%,59%)]`,
										icon: "text-school-gray group-data-[state=open]:rotate-180 md:size-6",
									}}
								>
									<Select.Value placeholder="Select the session" />
								</Select.Trigger>

								<Select.Content
									classNames={{
										base: "bg-white/90 backdrop-blur-lg",
										viewport: "gap-1",
									}}
								>
									<For
										each={schoolSessionQueryResult.data?.data ?? []}
										render={(item) => (
											<Select.Item
												key={item}
												value={item}
												className="h-6 bg-gray-200 text-[10px] font-medium text-210-79-44
													focus:bg-gray-300 focus:text-210-100-13
													data-[state=checked]:bg-gray-300"
											>
												{item}
											</Select.Item>
										)}
									/>
								</Select.Content>
							</Select.Root>
						)}
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="term" className="group flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium">Term</Form.Label>

					<Form.FieldController
						render={({ field }) => (
							<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
								<Select.Trigger
									classNames={{
										base: `rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3
										text-[10px] group-data-invalid:border-[hsl(2,84%,59%)]`,
										icon: "text-school-gray group-data-[state=open]:rotate-180 md:size-6",
									}}
								>
									<Select.Value placeholder="Select the term" />
								</Select.Trigger>

								<Select.Content
									classNames={{
										base: "bg-white/90 backdrop-blur-lg",
										viewport: "gap-1",
									}}
								>
									<For
										each={schoolTermQueryResult.data?.data ?? []}
										render={(item) => (
											<Select.Item
												key={item}
												value={item}
												className="h-6 bg-gray-200 text-[10px] font-medium text-210-79-44
													focus:bg-gray-300 focus:text-210-100-13
													data-[state=checked]:bg-gray-300"
											>
												{item}
											</Select.Item>
										)}
									/>
								</Select.Content>
							</Select.Root>
						)}
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="scratch_card_code" className="flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium">Card Pin</Form.Label>
					<Form.Input
						placeholder="Enter card pin"
						className="rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3 text-[10px]
							data-invalid:border-[hsl(2,84%,59%)]"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="serial_number" className="flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium">Card Serial No.</Form.Label>
					<Form.Input
						placeholder="e.g: 12348..."
						className="rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3 text-[10px]
							data-invalid:border-[hsl(2,84%,59%)]"
					/>
				</Form.Field>
			</div>

			<Form.SubscribeToFormState
				render={({ isSubmitting, isValid }) => (
					<Form.Submit
						disabled={isSubmitting}
						className={cnMerge(
							`mx-auto mt-12 flex h-10 w-[min(130px,100%)] items-center justify-center rounded-[8px]
							bg-210-79-44 text-[14px] font-semibold`,
							isSubmitting && "grid",
							!isValid && "cursor-not-allowed bg-gray-400"
						)}
					>
						<p className={cnJoin(isSubmitting && "invisible [grid-area:1/1]")}>Check Result</p>

						{isSubmitting && (
							<span className="flex justify-center [grid-area:1/1]">
								<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
							</span>
						)}
					</Form.Submit>
				)}
			/>
		</Form.Root>
	);
}

export { ResultCheckForm };
