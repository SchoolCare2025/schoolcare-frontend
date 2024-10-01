import React from "react";
import RegisteredIcon from "../assets/images/registeredIcon.svg";

const Registered = () => {
	return (
		<div
			className="mt-[80%] flex h-32 w-full items-center justify-center gap-x-24 bg-cosBlue sm:gap-x-28
				lg:my-40 lg:mt-[20%] lg:gap-48"
		>
			<div className="flex sm:flex-col sm:items-center lg:flex-row lg:gap-3">
				<div className="rounded-full bg-cosWhite text-center sm:h-12 sm:w-12 lg:h-16 lg:w-16">
					<i className="ri-graduation-cap-line sm:text-[35px] lg:text-[44px]"></i>
				</div>
				<div className="text-cosWhite sm:text-center lg:text-start">
					<p>582</p>
					<p>Registered School</p>
				</div>
			</div>

			<div className="flex sm:flex-col sm:items-center lg:flex-row lg:gap-3">
				<div className="grid rounded-full bg-cosWhite text-center sm:h-12 sm:w-12 lg:h-16 lg:w-16">
					<i className="ri-user-line sm:text-[36px] lg:text-[44px]"></i>
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
