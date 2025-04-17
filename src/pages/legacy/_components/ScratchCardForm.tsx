import { IconBox, getElementList } from "@/components/common";
import { type CheckResultResponse, callBackendApi } from "@/lib/api/callBackendApi";
import { cnMerge } from "@/lib/utils/cn";
import { schoolSessionQuery, schoolTermQuery } from "@/store/react-query/queryFactory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useStorageState } from "@zayne-labs/toolkit-react";
import { Form } from "@zayne-labs/ui-react/form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

const ScratchCardFormSchema = z.object({
	class_grade: z.string().min(1, "Grade level is required"),
	school_class: z.string().min(1, "Class is required"),
	school_ID: z.string().min(1, "School ID is required"),
	scratch_card_code: z.string().min(1, "Scratch card code is required"),
	serial_number: z.string().min(1, "Serial number is required"),
	session: z.string().min(1, "Session is required"),
	student_reg_number: z.string().min(1, "Reg number is required"),
	term: z.string().min(1, "Term is required"),
});

function ScratchCardForm() {
	const { 1: setStorageState } = useStorageState<CheckResultResponse | null>("scratch-card-result", null);

	const schoolSessionQueryResult = useQuery(schoolSessionQuery({ meta: { toast: { error: false } } }));
	const schoolTermQueryResult = useQuery(schoolTermQuery({ meta: { toast: { error: false } } }));

	const [For] = getElementList("base");

	const methods = useForm({
		resolver: zodResolver(ScratchCardFormSchema),
	});

	const navigate = useNavigate();

	const onSubmit = methods.handleSubmit(async (data) => {
		await callBackendApi<CheckResultResponse>("/check-result", {
			body: data,
			meta: {
				skipAuthHeaderAddition: true,
			},
			method: "POST",

			onSuccess: (ctx) => {
				setStorageState(ctx.data.data);

				void navigate("/result-sheet");
			},
		});
	});

	return (
		<Form.Root
			methods={methods}
			onSubmit={(event) => void onSubmit(event)}
			className="absolute mx-auto mt-6 w-full max-w-[376px] rounded-[12px] bg-cosWhite p-5 shadow-2xl
				max-lg:left-[50%] max-lg:translate-x-[-50%] lg:top-[23%] lg:right-[2%] lg:mx-10 lg:mt-20
				lg:max-w-[405px] lg:scale-[1.12] lg:px-4 lg:pb-12 xl:right-[8%]"
		>
			<p className="mb-4 text-center text-[18px] font-semibold">
				Fill up the form below to access result
			</p>

			<div className="grid grid-cols-2 gap-x-4 lg:gap-y-2">
				<Form.Field<typeof methods.control> name="school_ID" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">School ID*</Form.Label>
					<Form.Input
						placeholder="eg:12567"
						className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-hidden"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="student_reg_number" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Reg Number</Form.Label>
					<Form.Input
						placeholder="eg:20246..."
						className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-hidden"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="school_class" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">School Class*</Form.Label>
					<Form.Input
						placeholder="eg: JSS1"
						className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-hidden"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="class_grade" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Grade*</Form.Label>
					<Form.Input
						placeholder="eg: A"
						className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-hidden"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="session" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Result Session*</Form.Label>
					<Form.Select
						className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-hidden"
					>
						<option value="" disabled={true} hidden={true}>
							Select a session
						</option>

						<For
							each={schoolSessionQueryResult.data?.data ?? []}
							render={(item) => (
								<option key={item} value={item}>
									{item}
								</option>
							)}
						/>
					</Form.Select>
				</Form.Field>

				<Form.Field<typeof methods.control> name="term" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Result Term</Form.Label>
					<Form.Select
						className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-hidden"
					>
						<option value="" disabled={true} hidden={true}>
							Select a term
						</option>

						<For
							each={schoolTermQueryResult.data?.data ?? []}
							render={(item) => (
								<option key={item} value={item}>
									{item}
								</option>
							)}
						/>
					</Form.Select>
				</Form.Field>

				<Form.Field<typeof methods.control> name="scratch_card_code" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Card Pin</Form.Label>
					<Form.Input
						placeholder="Enter card pin"
						className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-hidden"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="serial_number" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Card Serial No.</Form.Label>
					<Form.Input
						placeholder="eg: 12348..."
						className="w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-hidden"
					/>
				</Form.Field>
			</div>

			<Form.SubscribeToFormState
				render={({ isSubmitting, isValid }) => (
					<Form.Submit
						disabled={isSubmitting || !isValid}
						className={cnMerge(
							`mt-4 flex h-10 w-[min(120px,100%)] items-center justify-center rounded-lg
							bg-resultBtn p-2 text-sm font-semibold text-textWhite`,
							!isValid && "cursor-not-allowed bg-gray-400"
						)}
					>
						{isSubmitting ? (
							<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
						) : (
							"Check Result"
						)}
					</Form.Submit>
				)}
			/>
		</Form.Root>
	);
}

export default ScratchCardForm;
