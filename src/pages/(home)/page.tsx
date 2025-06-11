import { chart } from "@/assets/images/landing";
import { ForWithWrapper, Image } from "@/components/common";
import { LineGraphIcon, PageIcon, PieIcon, StudentIcon, UploadIcon } from "@/components/icons";
import BrainIcon from "@/components/icons/BrainIcon";
import { Main } from "../dashboard/_components/Main";

const experiences = [
	{
		description:
			"Schools log into their dashboard and securely upload students’ results using a simple spreadsheet upload system.",
		icon: <UploadIcon className="size-9" />,
		title: "School Uploads Results",
	},
	{
		description:
			"The platform automatically organizes the results and assigns them to the correct student profile, ensuring accuracy and privacy.",
		icon: <PieIcon className="size-9" />,
		title: "System Processes the Data",
	},
	{
		description:
			"Students (or parents) log in with their credentials to easily view, download, or print their results anytime, anywhere.",
		icon: <StudentIcon className="size-9" />,
		title: "Students View Their Results",
	},
];

const features = [
	{
		description: "Students stay updated on their academic journey and know where they need to improve.",
		icon: <LineGraphIcon className="size-6" />,
		title: "Track Academic Progress",
	},
	{
		description:
			"As soon as results are uploaded, students can view them instantly. No delays, no queues.",
		icon: <PageIcon className="size-6" />,
		title: "Check Results Fast",
	},
	{
		description: "With early access, students can take action, study better, and grow academically.",
		icon: <BrainIcon className="size-6" />,
		title: "Improve Smarter",
	},
];

function HomePage() {
	return (
		<Main className="px-6 pt-0 pb-[140px] lg:px-[80px] lg:pb-[80px]">
			<section className="flex flex-col items-center gap-6 py-9 lg:gap-[52px] lg:py-[78px]">
				<h3 className="text-center font-bold lg:text-[32px]">Your SchoolCare Experience</h3>

				<ForWithWrapper
					className="max flex flex-col gap-6 lg:flex-row lg:gap-8"
					each={experiences}
					render={(experience) => (
						<li
							className="flex h-[218px] w-full flex-col items-center justify-center gap-3
								rounded-[12px] border-[3px] border-210-78-82 px-[52px] text-center lg:h-[285px]
								lg:rounded-[24px] lg:border-[5px] lg:px-8"
						>
							<span
								className="flex size-[64px] items-center justify-center rounded-full bg-210-77-95
									lg:size-[80px]"
							>
								{experience.icon}
							</span>

							<div className="flex flex-col gap-2">
								<h4 className="text-[14px] font-semibold lg:text-base">{experience.title}</h4>
								<p className="text-[12px] lg:text-base">{experience.description}</p>
							</div>
						</li>
					)}
				/>
			</section>

			<section className="flex flex-col items-center gap-6 py-9 lg:gap-[52px] lg:py-[78px]">
				<h3 className="text-center font-bold lg:text-[32px]">
					How SchoolCare Supports an Academic Journey
				</h3>

				<div className="flex flex-col gap-6 max-lg:items-center lg:flex-row lg:gap-[64px]">
					<Image
						src={chart}
						width={376}
						height={360}
						className="h-[360px] max-w-[376px] lg:h-[528px] lg:max-w-[583px]"
					/>

					<ForWithWrapper
						className="flex flex-col gap-6"
						each={features}
						render={(feature) => (
							<li
								className="flex items-start gap-3.5 rounded-[12px] bg-210-79-44 px-9 py-7.5
									text-white lg:gap-6.5 lg:rounded-[24px] lg:px-[50px]"
							>
								<span
									className="flex size-[48px] shrink-0 items-center justify-center rounded-full
										bg-white"
								>
									{feature.icon}
								</span>

								<div className="flex flex-col gap-2">
									<h4 className="text-[14px] font-bold lg:text-[24px]">{feature.title}</h4>
									<p className="text-[12px] font-medium lg:text-base">{feature.description}</p>
								</div>
							</li>
						)}
					/>
				</div>
			</section>
		</Main>
	);
}

export default HomePage;
