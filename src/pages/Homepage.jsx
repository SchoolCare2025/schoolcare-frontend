import React from "react";
import bgImage from "../assets/images/collegeStd.jpg";

const Homepage = () => {
	const backgroundImageStyle = {
		backgroundImage: `linear-gradient(to right bottom, rgba(2, 141, 219, 0.9), rgba(2, 141, 219, 0.7)), url('${bgImage}')`,
		backgroundSize: "cover",
	};

	return (
		<div
			className="w-full px-2 pb-[12rem] pt-[4rem] md:grid md:grid-cols-2 md:gap-5 md:pb-24 lg:gap-8
				lg:px-14 lg:pb-48 xl:pb-52"
			style={backgroundImageStyle}
		>
			<div className="md:px-2 lg:mr-10">
				<div className="mt-0 grid w-[100%] grid-cols-1 gap-4 text-cosWhite md:ml-0 md:mt-8 md:max-w-2xl">
					<h2
						className="text-center text-2xl font-bold md:text-4xl lg:text-left lg:text-5xl
							lg:font-semibold"
					>
						School Results and Checker
					</h2>
					<p className="my-2 text-center text-base md:text-xl lg:text-left lg:text-2xl">
						Get access to all academic results with ease. Whether you're eagerly anticipating your
						final exam results or need to track your performance throughout the semester, Myschool
						offers a user-friendly interface that puts all your academic data at your fingertips.
					</p>
				</div>

				<div className="flex items-center justify-center gap-4 pt-12 md:flex md:justify-start">
					<button className="hidden rounded-lg bg-cosBlue px-3 py-2 text-xl text-textWhite md:block">
						Get Started
					</button>
					<button
						className="rounded-lg border-2 border-cosBlue bg-cosBlue bg-none px-3 py-2 font-semibold
							text-textWhite"
					>
						Register School
					</button>
				</div>
			</div>

			<form
				action=""
				className="absolute mx-auto mt-6 w-full max-w-[376px] rounded-[12px] bg-cosWhite p-5 shadow-2xl
					max-md:left-[50%] max-md:translate-x-[-50%] md:right-[2%] md:top-[15%] md:max-w-[450px]
					md:px-8 md:pb-16 xl:right-[8%]"
			>
				<p className="mb-4 text-[18px] font-semibold">Fill up the form below to access result</p>
				<div className="grid grid-cols-2 gap-x-4 md:gap-4">
					<div className="">
						<p className="text-md">School ID*</p>
						<input type="text" placeholder="eg:12567" className="input placeholder: mb-4 text-sm" />
					</div>

					<div className="">
						<p className="text-md">Result Session*</p>
						<select
							className="input placeholder: mb-4 text-sm"
							type="text"
							placeholder="choose session"
						>
							<option value="">Choose Session</option>
							<option value="">2024/2025</option>
							<option value="">2025/2026</option>
						</select>
					</div>

					<div className="">
						<p className="text-md">Class Grade*</p>
						<select className="input placeholder: mb-4 text-sm" type="text">
							<option className="options" value="">
								Choose Class
							</option>
							<option className="options" value="">
								Primary One
							</option>
							<option className="options" value="">
								Primary Two
							</option>
							<option className="options" value="">
								Primary Three
							</option>
							<option className="options" value="">
								Primary Four
							</option>
							<option className="options" value="">
								Primary Five
							</option>
							<option className="options" value="">
								Primary Six
							</option>
							<option className="options" value="">
								JSS1
							</option>
							<option className="options" value="">
								JSS2
							</option>
							<option className="options" value="">
								JSS3
							</option>
							<option className="options" value="">
								SS1
							</option>
							<option className="options" value="">
								SS2
							</option>
							<option className="options" value="">
								SS3
							</option>
						</select>
					</div>

					<div className="">
						<p className="text-md">Card Pin</p>
						<input
							className="input placeholder: mb-4 text-sm"
							type="text"
							placeholder="Enter card pin"
						/>
					</div>

					<div className="">
						<p className="text-md">Reg Number</p>
						<input
							className="input placeholder: mb-4 text-sm"
							type="text"
							placeholder="eg:20246..."
						/>
					</div>

					<div className="">
						<p className="text-md">Result Term</p>
						<select className="input placeholder: mb-4 text-sm" type="text">
							<option value="">Choose Term</option>
							<option value="">First</option>
							<option value="">Second</option>
						</select>
					</div>

					<div className="">
						<p className="text-md">Grade Level*</p>
						<input
							className="input placeholder: mb-4 text-sm"
							type="text"
							placeholder="eg: JSS1 A"
						/>
					</div>

					<div className="">
						<p className="text-md">Card Serial No.</p>
						<input className="input placeholder: text-sm" type="text" placeholder="eg: 12348..." />
					</div>
				</div>
				<button
					className="mt-4 rounded-lg border-none bg-resultBtn px-2 py-2 text-sm font-semibold
						text-textWhite"
				>
					Check Result
				</button>
			</form>

			<div></div>
		</div>
	);
};

export default Homepage;
