import bgImage from "../../../assets/images/collegeStd.jpg";

const Homepage = () => {
	const backgroundImageStyle = {
		backgroundImage: `linear-gradient(to right bottom, rgba(2, 141, 219, 0.9), rgba(2, 141, 219, 0.7)), url('${bgImage}')`,
		backgroundSize: "cover",
	};

	return (
		<div
			className="w-full px-2 pb-[9rem] pt-[4rem] lg:grid lg:grid-cols-2 lg:gap-8 lg:px-14"
			style={backgroundImageStyle}
		>
			<div className="lg:mr-10 lg:px-2">
				<div className="mt-0 grid w-[100%] grid-cols-1 gap-4 text-cosWhite lg:ml-0 lg:mt-8 lg:max-w-2xl">
					<h2 className="text-center text-2xl font-bold lg:text-left lg:text-5xl lg:font-semibold">
						School Results and Checker
					</h2>
					<p className="my-2 text-center text-base lg:text-left lg:text-2xl">
						Get access to all academic results with ease. Whether you're eagerly anticipating your
						final exam results or need to track your performance throughout the semester, Myschool
						offers a user-friendly interface that puts all your academic data at your fingertips.
					</p>
				</div>

				<div className="flex items-center justify-center gap-4 pt-12 lg:flex lg:justify-start">
					<button className="hidden rounded-lg bg-cosBlue px-3 py-2 text-xl text-textWhite lg:block">
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
					max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[2%] lg:top-[23%] lg:max-w-[450px]
					lg:scale-[1.12] lg:px-8 lg:pb-16 xl:right-[8%]"
			>
				<p className="mb-4 text-center text-[18px] font-semibold">
					Fill up the form below to access result
				</p>
				<div className="grid grid-cols-2 gap-x-4 lg:gap-4">
					<div className="flex flex-col">
						<p className="mb-1 text-lg">School ID*</p>
						<input
							type="text"
							placeholder="eg:12567"
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Reg Number</p>
						<input
							type="text"
							placeholder="eg:20246..."
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Class Grade*</p>
						<select
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						>
							<option value="" className="outline-none">
								Choose Class
							</option>
							<option value="Primary One">Primary One</option>
							<option value="Primary One">Primary Two</option>
							<option value="Primary One">Primary Three</option>
							<option value="Primary One">Primary Four</option>
							<option value="Primary One">Primary Five</option>
							<option value="Primary One">Primary Six</option>
							<option value="Primary One">JSS1</option>
							<option value="Primary One">JSS2</option>
							<option value="Primary One">JSS3</option>
							<option value="Primary One">SS1</option>
							<option value="Primary One">SS2</option>
							<option value="Primary One">SS3</option>
						</select>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Grade Level*</p>
						<input
							type="text"
							placeholder="eg: JSS1 A"
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Result Session*</p>
						<select
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
							placeholder="choose session"
						>
							<option value="">Choose Session</option>
							<option value="2024/2025">2024/2025</option>
							<option value="2025/2026">2025/2026</option>
						</select>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Result Term</p>
						<select
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						>
							<option value="">Choose Term</option>
							<option value="First">First Term</option>
							<option value="Second">Second Term</option>
							<option value="Second">Third Term</option>
							<option value="Second">Cumulative Result</option>
						</select>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Card Pin</p>
						<input
							type="text"
							placeholder="Enter card pin"
							className="mb-4 w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>

					<div className="flex flex-col">
						<p className="mb-1 text-lg">Card Serial No.</p>
						<input
							type="text"
							placeholder="eg: 12348..."
							className="w-full rounded-lg border-2 border-cosBorder p-2 text-sm outline-none"
						/>
					</div>
				</div>

				<button className="mt-4 rounded-lg bg-resultBtn px-2 py-2 text-sm font-semibold text-textWhite">
					Check Result
				</button>
			</form>
		</div>
	);
};

export default Homepage;
