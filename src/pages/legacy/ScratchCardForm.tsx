import { type CheckResultResponse, callBackendApi } from "@/lib/api/callBackendApi";
import { useStorageState } from "@zayne-labs/toolkit/react";
import { useNavigate } from "react-router";

function ScratchCardForm() {
	const navigate = useNavigate();

	const { 1: setState } = useStorageState<CheckResultResponse | null>("scratch-card-result", null);

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formObject = Object.fromEntries(new FormData(event.currentTarget));

		await callBackendApi<CheckResultResponse>("/check-result", {
			body: formObject,
			meta: {
				skipAuthHeaderAddition: true,
			},
			method: "POST",

			onSuccess: (ctx) => {
				setState(ctx.data.data);

				void navigate("/result-sheet");
			},
		});
	};

	return (
		<form
			onSubmit={(event) => void onSubmit(event)}
			className="bg-cosWhite absolute mx-auto mt-6 w-full max-w-[376px] rounded-[12px] p-5 shadow-2xl
				max-lg:left-[50%] max-lg:translate-x-[-50%] lg:top-[23%] lg:right-[2%] lg:mx-10 lg:mt-20
				lg:max-w-[405px] lg:scale-[1.12] lg:px-4 lg:pb-12 xl:right-[8%]"
		>
			<p className="mb-4 text-center text-[18px] font-semibold">
				Fill up the form below to access result
			</p>
			<div className="grid grid-cols-2 gap-x-4 lg:gap-y-2">
				<div className="flex flex-col">
					<p className="mb-1 text-lg">School ID*</p>
					<input
						type="text"
						name="school_ID"
						placeholder="eg:12567"
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</div>

				<div className="flex flex-col">
					<p className="mb-1 text-lg">Reg Number</p>
					<input
						name="student_reg_number"
						type="text"
						placeholder="eg:20246..."
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</div>

				<div className="flex flex-col">
					<p className="mb-1 text-lg">Class Grade*</p>
					<input
						name="school_class"
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</div>

				<div className="flex flex-col">
					<p className="mb-1 text-lg">Grade Level*</p>
					<input
						type="text"
						placeholder="eg: JSS1 A"
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</div>

				<div className="flex flex-col">
					<p className="mb-1 text-lg">Result Session*</p>
					<input
						name="session"
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</div>

				<div className="flex flex-col">
					<p className="mb-1 text-lg">Result Term</p>
					<input
						name="term"
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</div>

				<div className="flex flex-col">
					<p className="mb-1 text-lg">Card Pin</p>
					<input
						name="scratch_card_code"
						type="text"
						placeholder="Enter card pin"
						className="border-cosBorder mb-4 w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</div>

				<div className="flex flex-col">
					<p className="mb-1 text-lg">Card Serial No.</p>
					<input
						name="serial_number"
						type="text"
						placeholder="eg: 12348..."
						className="border-cosBorder w-full rounded-lg border-2 p-2 text-sm outline-hidden"
					/>
				</div>
			</div>

			<button
				type="submit"
				className="bg-resultBtn text-textWhite mt-4 rounded-lg p-2 text-sm font-semibold"
			>
				Check Result
			</button>
		</form>
	);
}

export default ScratchCardForm;
