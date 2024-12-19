import Coworkers from "../../assets/images/coworkers.png";

const WhoWeAre = () => {
	return (
		<div>
			<div className="grid text-center sm:gap-6 sm:px-10 md:my-6 md:flex">
				<div className="md:w-[50%] md:object-cover sxl:order-2">
					<img src={Coworkers} alt="" className="rounded-xl" />
				</div>

				<div className="md:w-[50%] md:text-start sxl:order-1 sxl:text-start sxl:text-[24px]">
					<p>
						The MYSKUL.COM.NG team is a dynamic assembly of technology experts and enthusiasts,
						unified by their passion for innovation and problem-solving. Comprising individuals with
						diverse skills and backgrounds, this team collaborates synergistically to address
						real-world challenges through technology-driven solutions. What sets the MYSKUL.COM.NG
						team apart is not just their technical prowess but also their deep understanding of the
						needs and aspirations of their users. They approach each project with empathy and
						creativity, striving to create solutions that are not only functional but also intuitive
						and impactful.
					</p>
				</div>
			</div>

			<div className="md:px-10 sxl:text-[24px]">
				The MYSKUL.COM.NG team is a dynamic assembly of technology experts and enthusiasts, unified by
				their passion for innovation and problem-solving. Comprising individuals with diverse skills
				and backgrounds, this team collaborates synergistically to address real-world challenges
				through technology-driven solutions. What sets the MYSKUL.COM.NG team apart is not just their
				technical prowess but also their deep understanding of the needs and aspirations of their
				users. They approach each project with empathy and creativity, striving to create solutions
				that are not only functional but also intuitive and impactful.
			</div>

			<h1 className="text-black sm:my-8 sm:text-center sm:text-2xl sm:font-bold">Our Core Value</h1>

			<div
				className="bg-bgTestimonials-65 sm:grid sm:gap-12 sm:px-10 sm:py-12 md:grid-cols-2 md:gap-10
					md:px-12"
			>
				<div
					className="rounded-xl bg-cosWhite text-center sm:px-6 sm:py-12 md:h-72 md:py-7 lg:w-[100%]"
				>
					<div>
						<i className="ri-lightbulb-flash-line text-cosBlue sm:text-[56px] md:text-[44px]"></i>
					</div>
					<h1 className="my-2 font-bold sm:text-xl">Innovation</h1>
					<p>
						They continuously seek out new ideas, technologies, and methodologies to develop
						groundbreaking solutions that address life's challenges.
					</p>
				</div>

				<div>
					<div
						className="rounded-xl bg-cosWhite text-center sm:px-6 sm:py-7 md:flex md:h-48
							md:items-center md:px-4 lg:w-[100%] sxl:w-[90%]"
					>
						<div className="mr-3">
							<i className="ri-verified-badge-line text-cosBlue sm:text-[56px] md:text-[44px]"></i>
						</div>
						<div className="md:text-start">
							<h1 className="my-2 font-bold sm:text-xl">Integrity</h1>
							<p>
								We believe in honesty, transparency, and ethical conduct in all our interactions,
								whether with clients, partners, or team members.
							</p>
						</div>
					</div>

					<div
						className="rounded-xl bg-cosWhite text-center sm:mt-12 sm:px-6 sm:py-7 md:col-start-2
							md:mt-6 md:flex md:h-48 md:grid-rows-1 md:items-center md:px-4 lg:w-[100%]
							sxl:w-[90%]"
					>
						<div className="mr-3">
							<i className="ri-team-line text-cosBlue sm:text-[56px] md:text-[44px]"></i>
						</div>
						<div className="md:text-start">
							<h1 className="my-2 font-bold sm:text-xl">Collaboration</h1>
							<p>
								We recognize the power of teamwork and believe that by working together, we can
								achieve greater results than by working alone.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
