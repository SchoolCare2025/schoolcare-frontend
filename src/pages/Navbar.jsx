import React, { useState } from "react";
import { useEffect } from "react";
import Logo from "../assets/images/myskulLogo.png";

const Navbar = () => {
	const [nav, SetNav] = useState(false);

	const handleNav = () => {
		SetNav(!nav);
	};

	useEffect(() => {
		if (nav) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [nav]);

	return (
		<nav className="flex items-center justify-between bg-cosWhite px-12 py-4">
			<div className="w-[6%] sxl:w-[5%]">
				<img src={Logo} alt="Logo" />
			</div>
			<ul
				className="hidden md:flex md:gap-4 md:text-base md:font-semibold lg:gap-12 lg:text-lg
					lg:font-normal xl:gap-14 xl:text-xl"
			>
				<li className="hover:text-cosBlue">
					<a href="/">Home</a>
				</li>
				<li className="hover:text-cosBlue">
					<a href="/AboutUs">About Us</a>
				</li>
				<li className="hover:text-cosBlue">
					<a href="/HowItWorks">How it Works</a>
				</li>
				<li className="hover:text-cosBlue">
					<a href="/FaQ">FAQs</a>
				</li>
				<li className="hover:text-cosBlue">
					<a href="ContactUs">Contact Us</a>
				</li>
			</ul>
			<button className="hidden rounded-lg bg-cosBlue p-2 px-3 text-xl text-textWhite md:block">
				<a href="/RegisterSchool">Register School</a>
			</button>

			<div onClick={handleNav} className="block sm:text-5xl md:hidden">
				{nav ? (
					<i className="ri-close-line text-4xl font-bold"></i>
				) : (
					<i className="ri-menu-fill text-4xl font-bold"></i>
				)}
			</div>

			<div
				className={
					nav
						? `fixed left-1/2 top-[54%] z-10 grid h-[90%] w-[100%] -translate-x-1/2 -translate-y-1/2
							transform items-center justify-center bg-cosWhite text-black duration-500 ease-in-out
							md:hidden`
						: "fixed left-[-100%] top-0 h-full w-[60%] duration-500 ease-in-out"
				}
			>
				<ul className="pt-24 text-center text-2xl">
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<a href="/Homepage">Home</a>
					</li>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<a href="/AboutUs">About Us</a>
					</li>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<a href="HowItWorks">How it Works</a>
					</li>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<a href="/FaQ">FAQs</a>
					</li>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<a href="ContactUs">Contact Us</a>
					</li>
				</ul>
				<button className="rounded-lg bg-cosBlue py-2 text-xl text-textWhite">Get Started</button>
			</div>
		</nav>
	);
};

export default Navbar;
