import { getElementList } from "@/components/common";
import { BookIcon, SchoolIcon, StudentIcon } from "@/components/icons";
import {
	allClassesInSchoolQuery,
	allStudentsInSchoolQuery,
	allSubjectsInSchoolQuery,
	sessionQuery,
} from "@/store/react-query/queryFactory";
import NumberFlow from "@number-flow/react";
import { useQuery } from "@tanstack/react-query";
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
		<Main className="w-full px-10 py-4">
			<InfoCardList
				as="section"
				className="flex gap-10"
				each={infoCardArray}
				render={(item) => (
					<article
						key={item.title}
						className="flex w-full flex-col items-center rounded-[30px] bg-white py-8"
					>
						<span
							className="flex size-[70px] items-center justify-center rounded-full border-[3px]
								border-school-blue"
						>
							{item.icon}
						</span>

						<h3 className="mt-1 text-[12px] font-medium">{item.title}</h3>

						<h4 className="h-[36px] text-[24px] font-bold">
							<NumberFlow value={item.description} />
						</h4>

						<div className="mt-3 h-4 w-full bg-school-blue" />
					</article>
				)}
			/>
		</Main>
	);
}

export default DashboardPage;
