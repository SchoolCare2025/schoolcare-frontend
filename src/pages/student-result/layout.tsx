import { Image, Show } from "@/components/common";
import type { CheckResultResponse } from "@/lib/api/callBackendApi";
import { useStorageState } from "@zayne-labs/toolkit-react";
import { Outlet } from "react-router";

function StudentResultLayout() {
	const [data] = useStorageState<CheckResultResponse | null>("scratch-card-result", null);

	const classSessionTerm = data?.class_session_term.split(" - ");

	const schoolClass = classSessionTerm?.[0];
	const schoolSession = classSessionTerm?.[1];
	const schoolTerm = classSessionTerm?.[2];

	return (
		<div className="flex grow flex-col">
			<header className="mt-10 flex flex-col gap-8">
				<section className="flex flex-col items-center justify-center text-center">
					<div className="ml-[-50px] flex flex-row-reverse items-center justify-center gap-10">
						<h1 className="text-[24px] font-semibold md:text-[32px]">{data?.school}</h1>

						<Show.Root when={data?.logo}>
							{(logo) => (
								<>
									<Image src={logo} width={36} height={36} className="rounded-full" />

									<Show.Otherwise>
										<span className="block size-[36px] shrink-0 rounded-full bg-[hsl(0,0%,85%)]" />
									</Show.Otherwise>
								</>
							)}
						</Show.Root>
					</div>

					<div className="flex flex-col gap-3 md:text-[20px]">
						<p className="max-w-[280px] text-[14px] md:max-w-[369px]">
							No. 45 Education Road, Knowledge Layout, Behind City Hall, Academic District, Lagos
							State, Nigeria
						</p>

						<p>Email: info@rockville.edu.ng</p>
					</div>
				</section>

				<hr className="inline-block h-0.5 w-full border-none bg-[hsl(0,0%,76%)]" />

				<section className="flex justify-around gap-4">
					<article className="grid grid-cols-[auto_auto] gap-3 md:gap-5">
						<p className="font-semibold">Student Name:</p>
						<p>{data?.student_name}</p>

						<p className="font-semibold">Student's Reg. No:</p>
						<p>{data?.student_reg_number}</p>

						<p className="font-semibold">Term:</p>
						<p>{schoolTerm}</p>
					</article>

					<article className="grid grid-cols-[auto_auto] gap-3 md:gap-4">
						<p className="font-semibold">Class:</p>
						<p>{schoolClass}</p>

						<p className="font-semibold">Sex:</p>
						<p>Male</p>

						<p className="font-semibold">Academic Year:</p>
						<p>{schoolSession}</p>
					</article>
				</section>
			</header>

			<Outlet />
		</div>
	);
}

export default StudentResultLayout;
