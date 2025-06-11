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

function ResultCheckForm() {
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
			className="w-full max-w-[578px] rounded-[24px] border-[2px] border-white px-9 py-11 md:px-10
				md:py-14 lg:border-[3px]"
		>
			<h3 className="text-center text-[14px] font-semibold lg:text-[24px]">Check Result</h3>

			<div className="mt-5.5 grid grid-cols-2 gap-x-7 gap-y-4 lg:mt-7 lg:gap-x-11.5 lg:gap-y-6.5">
				<Form.Field<typeof methods.control> name="school_ID" className="flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium lg:text-base">School ID</Form.Label>
					<Form.Input
						placeholder="Enter school ID"
						className="h-[40px] rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3
							text-[10px] data-invalid:border-[hsl(2,84%,59%)] lg:h-[48px] lg:rounded-[12px]
							lg:border-[2px] lg:px-6 lg:py-4 lg:text-base"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="student_reg_number" className="flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium lg:text-base">Reg. Number</Form.Label>
					<Form.Input
						placeholder="e.g: 20246..."
						className="h-[40px] rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3
							text-[10px] data-invalid:border-[hsl(2,84%,59%)] lg:h-[48px] lg:rounded-[12px]
							lg:border-[2px] lg:px-6 lg:py-4 lg:text-base"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="school_class" className="flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium lg:text-base">Class</Form.Label>
					<Form.Input
						placeholder="e.g: JSS1"
						className="h-[40px] rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3
							text-[10px] data-invalid:border-[hsl(2,84%,59%)] lg:h-[48px] lg:rounded-[12px]
							lg:border-[2px] lg:px-6 lg:py-4 lg:text-base"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="class_grade" className="flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium lg:text-base">Class Grade</Form.Label>
					<Form.Input
						placeholder="e.g: A"
						className="h-[40px] rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3
							text-[10px] data-invalid:border-[hsl(2,84%,59%)] lg:h-[48px] lg:rounded-[12px]
							lg:border-[2px] lg:px-6 lg:py-4 lg:text-base"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="session" className="group flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium lg:text-base">Result Session</Form.Label>

					<Form.FieldController
						render={({ field }) => (
							<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
								<Select.Trigger
									classNames={{
										base: `h-[40px] rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3
										text-[10px] group-data-invalid:border-[hsl(2,84%,59%)]
										data-placeholder:text-shadcn-muted-foreground lg:h-[48px] lg:rounded-[12px]
										lg:border-[2px] lg:px-6 lg:py-4 lg:text-base`,
										icon: "text-school-gray group-data-[state=open]:rotate-180 md:size-6",
									}}
								>
									<Select.Value placeholder="Select session" />
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
													data-[state=checked]:bg-gray-300 lg:text-base"
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
					<Form.Label className="text-[12px] font-medium lg:text-base">Term</Form.Label>

					<Form.FieldController
						render={({ field }) => (
							<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
								<Select.Trigger
									classNames={{
										base: `h-[40px] rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3
										text-[10px] group-data-invalid:border-[hsl(2,84%,59%)]
										data-placeholder:text-shadcn-muted-foreground lg:h-[48px] lg:rounded-[12px]
										lg:border-[2px] lg:px-6 lg:py-4 lg:text-base`,
										icon: "text-school-gray group-data-[state=open]:rotate-180 md:size-6",
									}}
								>
									<Select.Value placeholder="Select term" />
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
													data-[state=checked]:bg-gray-300 lg:text-base"
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
					<Form.Label className="text-[12px] font-medium lg:text-base">Card Pin</Form.Label>
					<Form.Input
						placeholder="Enter card pin"
						className="h-[40px] rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3
							text-[10px] data-invalid:border-[hsl(2,84%,59%)] lg:h-[48px] lg:rounded-[12px]
							lg:border-[2px] lg:px-6 lg:py-4 lg:text-base"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="serial_number" className="flex flex-col gap-3">
					<Form.Label className="text-[12px] font-medium lg:text-base">Card Serial No.</Form.Label>
					<Form.Input
						placeholder="e.g: 12348..."
						className="h-[40px] rounded-[8px] border-[2px] border-[hsl(0,0%,98%)] px-4 py-3
							text-[10px] data-invalid:border-[hsl(2,84%,59%)] lg:h-[48px] lg:rounded-[12px]
							lg:border-[2px] lg:px-6 lg:py-4 lg:text-base"
					/>
				</Form.Field>
			</div>

			<Form.SubscribeToFormState
				render={({ isSubmitting, isValid }) => (
					<Form.Submit
						disabled={isSubmitting}
						className={cnMerge(
							`mx-auto mt-12 flex h-10 w-full max-w-[120px] items-center justify-center
							rounded-[8px] bg-210-79-44 text-[14px] font-semibold lg:mt-14 lg:h-[64px]
							lg:max-w-[216px] lg:rounded-[12px] lg:text-[24px]`,
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
