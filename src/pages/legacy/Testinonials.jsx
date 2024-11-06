import Schul1 from "../../../assets/images/School1.png";
import Schul2 from "../../../assets/images/School2.png";

const Testimonials = () => {
	return (
		<div className="text-center">
			<h1 className="text-4xl font-bold text-black">Testimonials</h1>
			<p className="mb-8 mt-2 text-testiFont">What Our Users Say About Us</p>

			<div
				className="flex items-center justify-center gap-7 bg-bgTestimonials-65 py-16 pb-48 sm:px-4
					md:px-12"
			>
				<div className="grid w-full items-center justify-center">
					<div className="mx-auto h-16 w-16 rounded-full bg-cosWhite">
						<img src={Schul1} alt="" className="h-full w-full object-cover" />
					</div>
					<p className="mt-4 text-center text-cosWhite lg:text-[20px]">
						I was pleasantly surprised by how easy it is to navigate this platform. The user
						interface is intuitive, making it simple for students to access their results
						hassle-free.
					</p>
					<div className="mt-2 flex items-center justify-center gap-1">
						<i className="ri-star-fill text-xl text-starColor"></i>
						<i className="ri-star-fill text-xl text-starColor"></i>
						<i className="ri-star-fill text-xl text-starColor"></i>
						<i className="ri-star-fill text-xl text-starColor"></i>
						<i className="ri-star-fill text-xl text-starColor"></i>
					</div>
				</div>

				<div className="w-full items-center justify-center">
					<div className="mx-auto h-16 w-16 grid-cols-1 rounded-full bg-cosWhite">
						<img src={Schul2} alt="" className="h-full w-full object-cover" />
					</div>
					<p className="mt-4 text-center text-cosWhite lg:text-[20px]">
						This platform has simplified the process of accessing students results online. No more
						waiting in long lines or dealing with paperwork. Lorem ipsum dolor sit amet.
					</p>
					<div className="mt-2 flex items-center justify-center gap-1">
						<i className="ri-star-fill text-xl text-starColor"></i>
						<i className="ri-star-fill text-xl text-starColor"></i>
						<i className="ri-star-fill text-xl text-starColor"></i>
						<i className="ri-star-fill text-xl text-starColor"></i>
						<i className="ri-star-fill text-xl text-starColor"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
