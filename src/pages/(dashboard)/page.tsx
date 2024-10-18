import { getElementList } from "@/components/common";
import { BookIcon, SchoolIcon, StudentIcon } from "@/components/icons";

const infoCardArray = [
	{
		description: "5,542",
		icon: <StudentIcon />,
		title: "Registered Students",
	},
	{
		description: "45",
		icon: <BookIcon />,
		title: "Number of Subjects",
	},
	{
		description: "63",
		icon: <SchoolIcon />,
		title: "Numbers of Classes",
	},
];

function DashboardPage() {
	const [InfoCardList] = getElementList("base");

	return (
		<main className="w-full px-10 py-4">
			<section className="flex gap-10">
				<InfoCardList
					each={infoCardArray}
					render={(item) => (
						<article className="flex w-full flex-col items-center rounded-[30px] bg-white py-8">
							<span
								className="flex size-[70px] items-center justify-center rounded-full border-[3px]
									border-school-blue"
							>
								{item.icon}
							</span>

							<h3 className="mt-1 text-[12px] font-medium">{item.title}</h3>

							<h4 className="text-[24px] font-bold">{item.description}</h4>

							<div className="mt-3 h-4 w-full bg-school-blue" />
						</article>
					)}
				/>
			</section>
		</main>
	);
}

export default DashboardPage;
