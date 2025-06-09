import { schoolFour, schoolOne, schoolThree, schoolTwo } from "@/assets/images";
import { Image } from "@/components/common";
import { Outlet } from "react-router";
import { ResultCheckForm } from "./_components/ResultCheckForm";

function HomeLayout() {
	return (
		<div className="flex grow flex-col">
			<header className="flex flex-col items-center bg-210-100-13 px-9 pt-[84px] pb-14 text-white">
				<h1 className="text-center text-[24px] font-bold">
					Get Easy Access to all Academic results with{" "}
					<span className="text-210-79-44">SCHOOL CARE</span>
				</h1>

				<p className="mt-3 max-w-[288px] text-center">
					Access and manage all student results in one place.
				</p>

				<div className="mt-9 flex flex-col items-center gap-5.5">
					<button
						type="button"
						className="w-fit rounded-[8px] border border-[hsla(0,0%,98%,1)] px-6 py-2 text-[14px]
							font-semibold"
					>
						Login
					</button>

					<button
						type="button"
						className="rounded-[8px] bg-210-79-44 px-6 py-2 text-[14px] font-semibold"
					>
						Register School
					</button>
				</div>

				<div
					className="mt-5.5 flex w-full items-center justify-center gap-3 rounded-[60px] bg-201-100-9
						px-7.5 py-3"
				>
					<div className="flex [&>img]:-ml-3.5">
						<Image src={schoolOne} width={32} height={32} />
						<Image src={schoolTwo} width={32} height={32} />
						<Image src={schoolThree} width={32} height={32} />
						<Image src={schoolFour} width={32} height={32} />
					</div>

					<p className="text-[12px] font-medium">500+ Schools joined School Care</p>
				</div>

				<ResultCheckForm className="mt-14" />
			</header>

			<Outlet />
		</div>
	);
}

export default HomeLayout;
