/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { callBackendApi } from "@/lib/api/callBackendApi";
import bgImage from "../../assets/images/collegeStd.jpg";
import { useStorageState } from "@zayne-labs/toolkit/react";
import { useState } from "react";

const Homepage = () => {
	const [state, setState] = useState("scratch-card-result", null);

	const backgroundImageStyle = {
		backgroundImage: `linear-gradient(to right bottom, rgba(2, 141, 219, 0.9), rgba(2, 141, 219, 0.7)), url('${bgImage}')`,
		backgroundSize: "cover",
	};

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formObject = Object.fromEntries(new FormData(event.currentTarget));

		await callBackendApi("/check-result", {
			body: formObject,
			meta: {
				skipAuthHeaderAddition: true,
			},
			method: "POST",
			onSuccess: (ctx) => {
				se;
			},
		});
	};
	return (
		<div
			className="w-full px-2 pb-36 pt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:px-14"
			style={backgroundImageStyle}
		>
			<div className="lg:mr-10 lg:px-2">
				<div className="mt-0 grid w-full grid-cols-1 gap-4 text-cosWhite lg:ml-0 lg:mt-8 lg:max-w-2xl">
					<h2 className="text-center text-2xl font-bold lg:text-left lg:text-4xl lg:font-semibold">
						Universal School Management System
					</h2>
					<p className="my-2 text-center text-base lg:text-left lg:text-2xl">
						Our Universal School Management System helps streamline administrative and academic
						processes by providing an all-in-one platform that enhances efficient management, reduces
						paperwork, and simplifies administrative processes for everyone involved—all within one
						universal system for FREE!
					</p>
				</div>

				<div className="flex items-center justify-center gap-4 pt-12 lg:flex lg:justify-start">
					<button
						type="button"
						className="hidden rounded-lg bg-cosBlue px-3 py-2 text-xl text-textWhite lg:block"
					>
						Get Started
					</button>
					<button
						type="button"
						className="rounded-lg border-2 border-cosBlue bg-cosBlue bg-none px-3 py-2 font-semibold
							text-textWhite"
					>
						Register School
					</button>
				</div>
			</div>

			<form
				onSubmit={(event) => void onSubmit(event)}
				className="absolute mx-auto mt-6 w-full max-w-[376px] rounded-[12px] bg-cosWhite p-5 shadow-2xl
					max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[2%] lg:top-[23%] lg:mx-10 lg:mt-20
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
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Reg Number</p>
						<input
							name="student_reg_number"
							type="text"
							placeholder="eg:20246..."
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Class Grade*</p>
						<input
							name="school_class"
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Grade Level*</p>
						<input
							type="text"
							placeholder="eg: JSS1 A"
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Result Session*</p>
						<input
							name="session"
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Result Term</p>
						<input
							name="term"
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Card Pin</p>
						<input
							name="scratch_card_code"
							type="text"
							placeholder="Enter card pin"
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Card Serial No.</p>
						<input
							name="serial_number"
							type="text"
							placeholder="eg: 12348..."
							className="w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>
				</div>

				<button
					type="submit"
					className="mt-4 rounded-lg bg-resultBtn p-2 text-sm font-semibold text-textWhite"
				>
					Check Result
				</button>
			</form>

			<div />
		</div>
	);
};

export default Homepage;
