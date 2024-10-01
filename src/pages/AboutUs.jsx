import YoungLady from "../assets/images/youngLady.jpg";

const AboutUs = ({ className = "my-40" }) => {
	return (
		<div className={`w-full overflow-hidden px-12 md:px-3 ${className}`}>
			<h2 className="mb-16 text-center text-4xl font-bold">About Us</h2>
			<div
				className="mx-4 flex flex-col-reverse items-center justify-between gap-24 md:flex-row
					md:items-center md:justify-center md:gap-9 lg:justify-center sxl:px-9"
			>
				<div className="w-[100%] md:mt-5 md:w-[50%] sxl:w-[50%]">
					<p className="text-xl md:px-2 md:text-base lg:text-[18px] sxl:pr-24">
						Myschool.com allows students from registered schools to check their results online, both
						termly results, annual results and entrance exam results with ease. Schools with an
						official website already can contact us to have result system integrated in their
						website. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero, assumenda
						inventore beatae laudantium ducimus. Consectetur distinctio eligendi provident totam
						dolorum ea quo adipisci perspiciatis!
					</p>
				</div>

				<div
					className="relative w-full rounded-lg md:w-[50%] lg:items-center lg:justify-center
						sxl:w-[50%]"
				>
					<div
						className="absolute left-[-10%] top-10 flex h-10 w-44 items-center justify-center
							rounded-xl bg-cosWhite py-4 pl-10 pr-6 text-center text-[10px] font-semibold
							text-resultBtn shadow-xl max-md:px-0 md:right-96 md:top-32"
					>
						<p>Get access to academic results</p>
					</div>

					<div className="md:w-[105%] sxl:w-full">
						<img src={YoungLady} alt="" className="h-auto w-full min-w-[300px] rounded-2xl" />
					</div>

					<div
						className="absolute right-[-10%] top-32 flex h-10 w-36 items-center justify-center
							rounded-xl bg-cosWhite px-1 py-4 text-center text-xs font-semibold text-cosBlue
							shadow-xl md:top-48 md:px-3 lg:top-72 sxl:top-80"
					>
						<p>Track your performance</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
