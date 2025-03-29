import { NavLink } from "react-router";

function Navbar() {
	return (
		<header
			id="NavBar"
			className="sticky inset-[0_0_auto_0] z-100 flex w-full items-center justify-between bg-white
				px-9 py-5 md:py-9"
		>
			<DesktopNavigation />
		</header>
	);
}

function DesktopNavigation() {
	return (
		<article className="ml-[100px] flex w-full items-center justify-between">
			<nav className="flex min-w-fit gap-9 font-medium">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about-us">About us</NavLink>
				<NavLink to="/how-it-works">How it works</NavLink>
				<NavLink to="/faq">FaQs</NavLink>
				<NavLink to="/contact-us">Contact us</NavLink>
			</nav>

			<div className="flex items-center gap-5">
				<span className="block size-[27px] rounded-full bg-[hsl(0,0%,85%)]" />
				<p className="font-semibold">Redeemed Secondary School</p>
			</div>
		</article>
	);
}

export default Navbar;
