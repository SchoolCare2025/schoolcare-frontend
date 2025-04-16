const Registered = () => {
	return (
		<div
			className="mt-[500px] flex h-32 w-full items-center justify-center gap-x-24 bg-cosBlue lg:my-40
				lg:mt-[20%] lg:gap-48"
		>
			<div className="flex flex-col items-center lg:flex-row lg:gap-3">
				<div className="h-12 w-12 rounded-full bg-cosWhite text-center lg:h-16 lg:w-16">
					<i className="ri-graduation-cap-line text-[35px] lg:text-[44px]"></i>
				</div>
				<div className="text-center text-cosWhite lg:text-start">
					<p>582</p>
					<p>Registered School</p>
				</div>
			</div>

			<div className="flex flex-col items-center lg:flex-row lg:gap-3">
				<div className="grid h-12 w-12 rounded-full bg-cosWhite text-center lg:h-16 lg:w-16">
					<i className="ri-user-line text-[36px] lg:text-[44px]"></i>
				</div>
				<div className="text-center text-cosWhite lg:text-start">
					<p>98,679</p>
					<p>Registered Candidates</p>
				</div>
			</div>
		</div>
	);
};

export default Registered;
