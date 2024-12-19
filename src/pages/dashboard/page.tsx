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

	const allStudentsInSchoolQueryResult = useQuery(allStudentsInSchoolQuery());
	const allSubjectsInSchoolQueryResult = useQuery(
		allSubjectsInSchoolQuery(sessionQueryResult.data?.data?.school)
	);
	const allClassesInSchoolQueryResult = useQuery(allClassesInSchoolQuery());

	const [InfoCardList] = getElementList();

	const infoCardArray = [
		{
			description: allStudentsInSchoolQueryResult.data?.data?.length ?? 0,
			icon: <StudentIcon />,
			title: "Registered Students",
		},
		{
			description: allSubjectsInSchoolQueryResult.data?.data?.length ?? 0,
			icon: <BookIcon />,
			title: "Number of Subjects",
		},
		{
			description: allClassesInSchoolQueryResult.data?.data?.length ?? 0,
			icon: <SchoolIcon />,
			title: "Numbers of Classes",
		},
	];

	return (
		<Main className="flex w-full flex-col gap-[22px] px-10 py-4">
			<InfoCardList
				as="section"
				className="flex gap-10"
				each={infoCardArray}
				render={(item) => (
					<Card.Root key={item.title} className="w-[calc(100%/3)] rounded-[30px] bg-white py-8">
						<Card.Header className="flex flex-col items-center">
							<span
								className="flex size-[70px] items-center justify-center rounded-full border-[3px]
									border-school-blue"
							>
								{item.icon}
							</span>

							<Card.Title className="mt-1 text-[12px] font-medium">{item.title}</Card.Title>

							<Card.Description className="h-[36px] text-[24px] font-bold text-black">
								<NumberFlow value={item.description} />
							</Card.Description>
						</Card.Header>

						<Card.Footer className="mt-3 h-4 w-full bg-school-blue" />
					</Card.Root>
				)}
			/>

			<div className="flex">
				<section />

				<section className="ml-auto w-[calc(100%/3.3)]">
					<GenderRatioChart />
				</section>
			</div>
		</Main>
	);
}

export default DashboardPage;
