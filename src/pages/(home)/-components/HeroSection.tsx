import { schoolFour, schoolOne, schoolThree, schoolTwo } from "@/assets/images/landing";
import { Image } from "@/components/common";
import { ResultCheckForm } from "./ResultCheckForm";

function HeroSection() {
	return (
		<section
			className="flex flex-col items-center gap-14 bg-210-100-13 px-6 pt-[84px] pb-14 text-white
				lg:flex-row lg:items-start lg:gap-[96px] lg:px-[80px] lg:pb-[104px]"
		>
			<article className="flex flex-col items-center lg:items-start">
				<h1
					className="max-w-[353px] text-[24px] font-bold max-lg:text-center lg:max-w-[588px]
						lg:text-[48px]"
				>
					Track and Get Easy Access to all Academic results with{" "}
					<span className="text-210-79-44">SCHOOL CARE</span>
				</h1>

				<p className="mt-3 max-w-[288px] max-lg:text-center lg:max-w-[605px] lg:text-[32px]">
					Access and manage all student results in one place.
				</p>

				<div className="mt-9 flex flex-col items-center gap-5.5 lg:mt-[64px] lg:flex-row lg:gap-7">
					<button
						type="button"
						className="w-fit rounded-[8px] border border-[hsla(0,0%,98%,1)] px-6 py-2 font-semibold
							lg:rounded-[12px] lg:py-4 lg:text-[24px]"
					>
						Login
					</button>

					<button
						type="button"
						className="rounded-[8px] bg-210-79-44 px-6 py-2 font-semibold lg:rounded-[12px] lg:py-4
							lg:text-[24px]"
					>
						Register School
					</button>
				</div>

				<div
					className="mt-5.5 flex w-full max-w-[428px] items-center justify-center gap-3 rounded-[60px]
						bg-201-100-9 px-7.5 py-3 lg:mt-[50px] lg:px-11.5"
				>
					<div className="flex [&>img]:-ml-3.5">
						<Image src={schoolOne} width={32} height={32} />
						<Image src={schoolTwo} width={32} height={32} />
						<Image src={schoolThree} width={32} height={32} />
						<Image src={schoolFour} width={32} height={32} />
					</div>

					<p className="text-[12px] font-medium lg:text-base">500+ Schools joined School Care</p>
				</div>
			</article>

			<ResultCheckForm />
		</section>
	);
}

export { HeroSection };
