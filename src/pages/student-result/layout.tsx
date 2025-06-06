import type { CheckResultResponse } from "@/lib/api/callBackendApi";
import { useStorageState } from "@zayne-labs/toolkit-react";
import { Outlet } from "react-router";

function StudentResultLayout() {
	const [data] = useStorageState<CheckResultResponse | null>("scratch-card-result", null);

	return (
		<div className="flex grow flex-col">
			<header className="mt-10 flex flex-col gap-8">
				<section className="flex flex-col items-center justify-center text-center">
					<h1 className="text-[24px] font-semibold md:text-[32px]">Rockville International School</h1>

					<div className="flex flex-col gap-3 md:text-[20px]">
						<p className="max-w-[280px] text-[14px] md:max-w-[369px]">
							No. 45 Education Road, Knowledge Layout, Behind City Hall, Academic District, Lagos
							State, Nigeria
						</p>

						<p>Email: info@greenfield.edu.ng</p>
					</div>
				</section>

				<hr className="inline-block h-0.5 w-full border-none bg-[hsl(0,0%,76%)]" />

				<section className="flex justify-around gap-4">
					<article className="grid grid-cols-[auto_auto] gap-3 md:gap-5">
						<p className="font-semibold">Student Name:</p>
						<p>{data?.student}</p>

						<p className="font-semibold">Student's Reg. No:</p>
						<p>{data?.student_reg_number}</p>

						<p className="font-semibold">Term:</p>
						<p>Second Term</p>
					</article>

					<article className="grid grid-cols-[auto_auto] gap-3 md:gap-4">
						<p className="font-semibold">Class:</p>
						<p>JSS 1</p>

						<p className="font-semibold">Sex:</p>
						<p>Male</p>

						<p className="font-semibold">Academic Year:</p>
						<p>2024/2025</p>
					</article>
				</section>
			</header>

			<Outlet />
		</div>
	);
}

export default StudentResultLayout;
