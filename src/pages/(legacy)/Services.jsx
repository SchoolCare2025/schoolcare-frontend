const Services = () => {
	return (
		<div className="my-40">
			<h1 className="text-center text-4xl font-bold">Our Service</h1>

			<div
				className="sxl:grid-cols-3 mt-8 grid items-center gap-10 px-16 md:grid-cols-2 md:items-center
					lg:grid-cols-3 lg:gap-12 xl:grid-cols-3"
			>
				<div
					className="flex h-[30vh] w-full items-center rounded-lg border-b-8 border-borderBottom3
						bg-cosWhite px-4 font-bold text-black shadow-2xl"
					data-aos="fade-up"
				>
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slitePlink">
						<i className="ri-school-line text-[36px] md:text-[44px]"></i>
					</div>
					<p className="pl-2 text-[20px] md:text-[18px]">Free School Management System</p>
				</div>

				<div
					className="flex h-[35vh] w-[100%] items-center rounded-lg border-b-8 border-cosBorder
						bg-cosWhite px-4 font-bold text-black shadow-2xl md:h-[30vh] md:w-full"
					data-aos="fade-up"
				>
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slitePlink">
						<i className="ri-school-line text-[36px] md:text-[44px]"></i>
					</div>
					<p className="pl-2 text-[20px] md:text-[18px]">School Promotional Services</p>
				</div>

				<div
					className="flex h-[35vh] w-[100%] items-center rounded-lg border-b-8 border-borderBottom3
						bg-cosWhite px-4 font-bold text-black shadow-2xl md:h-[30vh] md:w-full"
					data-aos="fade-up"
				>
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slitePlink">
						<i className="ri-school-line text-[36px] md:text-[44px]"></i>
					</div>
					<p className="pl-2 text-[20px] md:text-[18px]">Professional School Website</p>
				</div>

				<div
					className="flex h-[35vh] w-[100%] items-center rounded-lg border-b-8 border-borderBottom2
						bg-cosWhite px-4 font-bold text-black shadow-2xl md:h-[30vh] md:w-full"
					data-aos="fade-up"
				>
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slitePlink">
						<i className="ri-school-line text-[36px] md:text-[44px]"></i>
					</div>
					<p className="pl-2 text-[20px] md:text-[18px]">Income Generation Options</p>
				</div>

				<div
					className="flex h-[35vh] w-[100%] items-center rounded-lg border-b-8 border-borderBottom2
						bg-cosWhite px-4 font-bold text-black shadow-2xl md:h-[30vh] md:w-full"
					data-aos="fade-up"
				>
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slitePlink">
						<i className="ri-school-line text-[36px] md:text-[44px]"></i>
					</div>
					<p className="pl-2 text-[20px] md:text-[18px]">Mobile App Development</p>
				</div>

				<div
					className="flex h-[35vh] w-[100%] items-center rounded-lg border-b-8 border-borderBottom3
						bg-cosWhite px-4 font-bold text-black shadow-2xl md:h-[30vh] md:w-full"
					data-aos="fade-up"
				>
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slitePlink">
						<i className="ri-school-line text-[36px] md:text-[44px]"></i>
					</div>
					<p className="pl-2 text-[20px] md:text-[18px]">Brand Marketing</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
