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

	const mergeClasses = (...classes) => classes.filter(Boolean).join(" ");

	return (
		<nav className="flex items-center justify-between bg-cosWhite px-12 py-4">
			<div className="w-[6%] sxl:w-[5%]">
				<img src={Logo} alt="Logo" />
			</div>
			<ul
				className="hidden text-base font-normal lg:flex lg:gap-12 lg:text-lg lg:font-semibold xl:gap-14
					xl:text-xl"
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
			<button className="hidden rounded-lg bg-cosBlue p-2 px-3 text-xl text-textWhite lg:block">
				<a href="/RegisterSchool">Register School</a>
			</button>

			<div onClick={handleNav} className="relative z-[200] block text-5xl lg:hidden">
				{nav ? (
					<i className="ri-close-line text-4xl font-bold"></i>
				) : (
					<i className="ri-menu-fill text-4xl font-bold"></i>
				)}
			</div>

			<div
				className={mergeClasses(
					`fixed inset-[0_0_0_auto] z-[150] flex w-full flex-col items-center justify-center
					bg-cosWhite text-black transition-transform duration-500 ease-in-out lg:hidden`,

					nav ? "translate-x-0" : "-translate-x-full"
				)}
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
