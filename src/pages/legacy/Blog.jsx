import SchoolChild1 from "../../assets/images/skulChild1 1.png";
import SchoolChild2 from "../../assets/images/skulChild3 1.png";
import SchoolFootballPitch from "../../assets/images/skulFootball 1.png";
import SchoolTenisGirl from "../../assets/images/skulTenisGirl 1.png";

const Blogs = () => {
	return (
		<div className="mb-52">
			<h1 className="text-center text-4xl font-bold">Latest From Our Blog</h1>

			<div
				className="mt-12 flex flex-col items-center justify-center gap-12 px-12 md:grid md:grid-cols-2
					lg:grid-cols-3 sxl:grid-cols-4"
			>
				<div className="h-full w-full" data-aos="fade-up">
					<div>
						<img className="h-full w-full" src={SchoolChild1} alt="" />
					</div>
					<h1 className="my-1 text-[24px] font-semibold">
						<a href="">St. Charles begins 2023/24...</a>
					</h1>
					<p className="py-4 text-[20px]">
						St Charles resumes academic session after the 3 months holidays
					</p>
					<a className="text-[20px] text-blue-500 hover:text-blue-800" href="#">
						Read more...
					</a>
				</div>

				<div className="h-full w-full" data-aos="fade-up">
					<div>
						<img className="h-full w-full" src={SchoolChild2} alt="" />
					</div>
					<h1 className="my-1 text-[24px] font-semibold">
						<a href="">GTC, Agba resumes 2023/2024...</a>
					</h1>
					<p className="py-4 text-[20px]">
						GTC, Agba resumes academic session after the 3 months holidays
					</p>
					<a className="text-[20px] text-blue-500 hover:text-blue-800" href="#">
						Read more...
					</a>
				</div>

				<div className="h-full w-full" data-aos="fade-up">
					<div>
						<img className="h-full w-full" src={SchoolTenisGirl} alt="" />
					</div>
					<h1 className="my-1 text-[24px] font-semibold">
						<a href="">FGGC College Sports Festival...</a>
					</h1>
					<p className="py-4 text-[20px]">
						FGGC College Sports Festival has Lorem ipsum dolor sit amet.
					</p>
					<a className="text-[20px] text-blue-500 hover:text-blue-800" href="#">
						Read more...
					</a>
				</div>

				<div className="h-full w-full" data-aos="fade-up">
					<div className="">
						<img className="h-full w-full" src={SchoolFootballPitch} alt="" />
					</div>
					<h1 className="my-1 text-[24px] font-semibold">
						<a href="">Royal Comp. College Inter-house Sports...</a>
					</h1>
					<p className="py-4 text-[20px]">
						Royal begins Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
					</p>
					<a className="text-[20px] text-blue-500 hover:text-blue-800" href="#">
						Read more...
					</a>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
