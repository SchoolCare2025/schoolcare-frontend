import { getElementList } from "@/components/common";
import { BookIcon, SchoolIcon, StudentIcon } from "@/components/icons";
import { Card } from "@/components/ui";
import {
	allClassesInSchoolQuery,
	allStudentsInSchoolQuery,
	allSubjectsInSchoolQuery,
	sessionQuery,
} from "@/store/react-query/queryFactory";
import NumberFlow from "@number-flow/react";
import { useQuery } from "@tanstack/react-query";
import GenderRatioChart from "./_components/GenderRatioChart";
import Main from "./_components/Main";

function DashboardPage() {
	const sessionQueryResult = useQuery(sessionQuery());

	const allSubjectsInSchoolQueryResult = useQuery(
		allSubjectsInSchoolQuery(sessionQueryResult.data?.data?.school)
	);

	const allStudentsInSchoolQueryResult = useQuery(allStudentsInSchoolQuery());

	const allClassesInSchoolQueryResult = useQuery(allClassesInSchoolQuery());

	const [InfoCardList] = getElementList();

	const infoCardArray = [
		{
			description: allStudentsInSchoolQueryResult.data?.data?.length ?? 0,
			icon: <StudentIcon className="max-md:size-3" />,
			title: "Registered Students",
		},
		{
			description: allSubjectsInSchoolQueryResult.data?.data?.length ?? 0,
			icon: <BookIcon className="max-md:size-3" />,
			title: "Number of Subjects",
		},
		{
			description: allClassesInSchoolQueryResult.data?.data?.length ?? 0,
			icon: <SchoolIcon className="max-md:size-3" />,
			title: "Numbers of Classes",
		},
	];

	return (
		<Main className="flex w-full flex-col gap-9 py-4 md:gap-5.5">
			<InfoCardList
				as="section"
				className="flex gap-5 md:gap-10"
				each={infoCardArray}
				render={(item) => (
					<Card.Root
						key={item.title}
						className="border-school-gray-lighter w-[calc(100%/3)] rounded-[8px] border-2 bg-white
							py-[20px_9px] md:rounded-[30px] md:py-[30px_32px]"
					>
						<Card.Header className="flex flex-col items-center">
							<span
								className="border-school-blue flex size-6 items-center justify-center rounded-full
									border-[3px] md:size-[70px]"
							>
								{item.icon}
							</span>

							<hr className="bg-school-blue mt-2 h-2 w-full md:hidden" />

							<Card.Title className="mt-1.5 text-[6px] font-medium md:mt-3.5 md:text-[12px]">
								{item.title}
							</Card.Title>

							<Card.Description className="text-[10px] font-bold text-black md:mt-1 md:text-[24px]">
								<NumberFlow value={item.description} />
							</Card.Description>
						</Card.Header>

						<hr className="bg-school-blue mt-3 h-4 w-full max-md:hidden" />
					</Card.Root>
				)}
			/>

			<div className="flex flex-col md:flex-row">
				<section />

				<section className="md:ml-auto md:w-[calc(100%/3.3)]">
					<GenderRatioChart />
				</section>
			</div>
		</Main>
	);
}

export default DashboardPage;
