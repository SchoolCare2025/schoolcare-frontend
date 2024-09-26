import React from "react";
import RegisteredIcon from "../assets/images/registeredIcon.svg";

const Registered = () => {
	return (
		<div
			className="mt-[60%] flex h-32 w-full items-center justify-center gap-x-24 bg-cosBlue sm:gap-x-28
				md:mt-[20%] md:gap-40 lg:my-40 lg:gap-48"
		>
			<div className="flex sm:flex-col sm:items-center lg:flex-row lg:gap-3">
				<div className="rounded-full bg-cosWhite text-center sm:h-12 sm:w-12 md:h-16 md:w-16">
					<i className="ri-graduation-cap-line sm:text-[35px] md:text-[44px]"></i>
				</div>
				<div className="text-cosWhite sm:text-center lg:text-start">
					<p>582</p>
					<p>Registered School</p>
				</div>
			</div>

			<div className="flex sm:flex-col sm:items-center lg:flex-row lg:gap-3">
				<div className="grid rounded-full bg-cosWhite text-center sm:h-12 sm:w-12 md:h-16 md:w-16">
					<i className="ri-user-line sm:text-[36px] md:text-[44px]"></i>
				</div>
				<div className="text-cosWhite sm:text-center lg:text-start">
					<p>98,679</p>
					<p>Registered Candidates</p>
				</div>
			</div>
		</div>
	);
};

export default Registered;
