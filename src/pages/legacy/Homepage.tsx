import { NavLink } from "react-router";
import bgImage from "../../assets/images/collegeStd.jpg";
import ScratchCardForm from "./ScratchCardForm";

const Homepage = () => {
	const backgroundImageStyle = {
		backgroundImage: `linear-gradient(to right bottom, rgba(2, 141, 219, 0.9), rgba(2, 141, 219, 0.7)), url('${bgImage}')`,
		backgroundSize: "cover",
	};

	return (
		<div
			className="w-full px-2 pt-16 pb-36 lg:grid lg:grid-cols-2 lg:gap-8 lg:px-14"
			style={backgroundImageStyle}
		>
			<div className="lg:mr-10 lg:px-2">
				<div className="text-cosWhite mt-0 grid w-full grid-cols-1 gap-4 lg:mt-8 lg:ml-0 lg:max-w-2xl">
					<h2 className="text-center text-2xl font-bold lg:text-left lg:text-4xl lg:font-semibold">
						Universal School Management System
					</h2>
					<p className="my-2 text-center text-base lg:text-left lg:text-2xl">
						Our Universal School Management System helps streamline administrative and academic
						processes by providing an all-in-one platform that enhances efficient management, reduces
						paperwork, and simplifies administrative processes for everyone involved—all within one
						universal system for FREE!
					</p>
				</div>

				<div className="flex items-center justify-center gap-4 pt-12 lg:flex lg:justify-start">
					<button
						type="button"
						className="bg-cosBlue text-textWhite hidden rounded-lg px-3 py-2 text-xl lg:block"
					>
						<NavLink to="/signin">Get Started</NavLink>
					</button>
					<button
						type="button"
						className="border-cosBlue bg-cosBlue text-textWhite rounded-lg border-2 bg-none px-3 py-2
							font-semibold"
					>
						<NavLink to="/register/personal-info">Register School</NavLink>
					</button>
				</div>
			</div>

			<ScratchCardForm />
			<div />
		</div>
	);
};

export default Homepage;
