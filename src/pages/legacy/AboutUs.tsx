import YoungLady from "@/assets/images/youngLady.jpg";
import { cnMerge } from "@/lib/utils/cn";
import { Link } from "react-router";

const AboutUs = ({
	className = "my-40",
	variant = "about",
}: {
	className?: string;
	variant?: "about" | "home";
}) => {
	return (
		<div className={`w-full overflow-hidden px-5 md:px-3 ${className}`}>
			<h2 className="mb-16 text-center text-4xl font-bold">About Us</h2>
			<div
				className="sxl:px-9 mx-4 flex flex-col-reverse items-center justify-between gap-24 md:flex-row
					md:items-center md:justify-center md:gap-9 lg:justify-center"
			>
				<div className="sxl:w-full w-full md:mt-5 md:w-full">
					<p
						className={cnMerge(
							"sxl:pr-24 text-xl leading-8 md:px-2 md:text-base lg:text-[18px]",
							variant === "home" && "line-clamp-6"
						)}
					>
						Welcome to schoolcare.ng, your all-in-one Universal School Management System designed to
						streamline both administrative and academic processes. Our platform empowers schools to
						efficiently organize student databases, compute results in minutes, and monitor academic
						performance in real-time. We believe in showcasing student potential, enabling them to
						compete globally with their peers. schoolcare.ng enhances management efficiency, reduces
						paperwork, and simplifies administrative tasks for everyone involved—all at no cost. We
						aim to help schools transition from manual methods of computing student results to an
						automated system can significantly enhance efficiency and accuracy. By implementing
						automation, schools can streamline the process of tracking student performance in
						real-time, allowing educators to quickly identify areas where students may need
						additional support or resources. Moreover, this automation can facilitate a more
						comprehensive view of each student's progress, enabling personalized learning
						experiences. And with real-time data, teachers can adjust their teaching strategies to
						better meet the needs of their students. Additionally, by leveraging technology, students
						can be positioned on a global level. This means they can not only compete with peers
						locally but also connect with a broader network of learners worldwide. Such exposure can
						enhance their learning experience and prepare them for a globalized world.
					</p>

					{variant === "home" && (
						<Link to="/about-us" className="text-school-blue">
							Read more
						</Link>
					)}
				</div>

				<div
					className="sxl:w-[50%] relative w-full rounded-lg md:w-[50%] lg:items-center
						lg:justify-center"
				>
					<div
						className="bg-cosWhite text-resultBtn absolute top-10 left-[-10%] flex h-10 w-44
							items-center justify-center rounded-xl py-4 pr-6 pl-10 text-center text-[10px]
							font-semibold shadow-xl max-md:px-0 md:top-32 md:right-96"
					>
						<p>Get access to academic results</p>
					</div>

					<div className="sxl:w-full md:w-[105%]">
						<img src={YoungLady} alt="" className="h-auto w-full min-w-[300px] rounded-2xl" />
					</div>

					<div
						className="bg-cosWhite text-cosBlue sxl:top-80 absolute top-32 right-[-10%] flex h-10
							w-36 items-center justify-center rounded-xl px-1 py-4 text-center text-xs
							font-semibold shadow-xl md:top-48 md:px-3 lg:top-72"
					>
						<p>Track your performance</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AboutUs;
