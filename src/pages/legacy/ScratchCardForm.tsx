import { IconBox } from "@/components/common";
import { type CheckResultResponse, callBackendApi } from "@/lib/api/callBackendApi";
import { cnMerge } from "@/lib/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStorageState } from "@zayne-labs/toolkit-react";
import { Form } from "@zayne-labs/ui-react/form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

const ScratchCardFormSchema = z.object({
	grade_level: z.string().min(1, "Grade level is required"),
	school_class: z.string().min(1, "Class is required"),
	school_ID: z.string().min(1, "School ID is required"),
	scratch_card_code: z.string().min(1, "Scratch card code is required"),
	serial_number: z.string().min(1, "Serial number is required"),
	session: z.string().min(1, "Session is required"),
	student_reg_number: z.string().min(1, "Reg number is required"),
	term: z.string().min(1, "Term is required"),
});

function ScratchCardForm() {
	const navigate = useNavigate();

	const { 1: setStorageState } = useStorageState<CheckResultResponse | null>("scratch-card-result", null);

	const methods = useForm({
		resolver: zodResolver(ScratchCardFormSchema),
	});

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
			className="bg-cosWhite absolute mx-auto mt-6 w-full max-w-[376px] rounded-[12px] p-5 shadow-2xl
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
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="student_reg_number" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Reg Number</Form.Label>
					<Form.Input
						placeholder="eg:20246..."
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="school_class" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Class Grade*</Form.Label>
					<Form.Input
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="grade_level" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Grade Level*</Form.Label>
					<Form.Input
						placeholder="eg: JSS1 A"
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="session" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Result Session*</Form.Label>
					<Form.Input
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="term" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Result Term</Form.Label>
					<Form.Input
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="scratch_card_code" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Card Pin</Form.Label>
					<Form.Input
						placeholder="Enter card pin"
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</Form.Field>

				<Form.Field<typeof methods.control> name="serial_number" className="flex flex-col">
					<Form.Label className="mb-1 text-lg">Card Serial No.</Form.Label>
					<Form.Input
						placeholder="eg: 12348..."
						className="border-cosBorder w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</Form.Field>
			</div>

			<Form.Submit
				disabled={methods.formState.isSubmitting || !methods.formState.isValid}
				className={cnMerge(
					"bg-resultBtn text-textWhite mt-4 w-fit rounded-lg p-2 text-sm font-semibold",
					!methods.formState.isValid && "cursor-not-allowed bg-gray-400"
				)}
			>
				{methods.formState.isSubmitting ? (
					<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
				) : (
					"Check Result"
				)}
			</Form.Submit>
		</Form.Root>
	);
}

export default ScratchCardForm;
