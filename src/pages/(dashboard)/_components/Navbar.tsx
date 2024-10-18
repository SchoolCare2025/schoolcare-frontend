import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<header
			id="NavBar"
			className="sticky inset-[0_0_auto_0] z-[100] flex w-full items-center justify-between bg-white
				px-9 py-5 md:py-9"
		>
			<DesktopNavigation />
		</header>
	);
}

function DesktopNavigation() {
	return (
		<article className="ml-[100px] flex w-full items-center justify-between">
			<nav className="flex min-w-fit gap-9 text-[20px] font-medium">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/AboutUs">About us</NavLink>
				<NavLink to="/HowItWorks">How it works</NavLink>
				<NavLink to="/FaQ">FaQs</NavLink>
				<NavLink to="/ContactUs">Contact us</NavLink>
			</nav>

			<div className="flex items-center gap-5">
				<span className="block size-[27px] rounded-full bg-[hsl(0,0%,85%)]" />
				<p className="text-[20px] font-semibold">Redeemed Secondary School</p>
			</div>
		</article>
	);
}

export default Navbar;
