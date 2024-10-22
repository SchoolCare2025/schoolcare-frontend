import { useToggle } from "@zayne-labs/toolkit/react";
import clsx from "clsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { twJoin } from "tailwind-merge";
import Logo from "../../../assets/images/myskulLogo.png";

const cnJoin = (...classNames) => twJoin(clsx(classNames));

const Navbar = () => {
	const [isNavOpen, toggleNavOpen] = useToggle(false);

	useEffect(() => {
		if (isNavOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isNavOpen]);

	return (
		<nav className="flex items-center justify-between bg-cosWhite px-12 py-4">
			<Link to="/" className="block w-[6%] sxl:w-[5%]">
				<img src={Logo} alt="Logo" />
			</Link>
			<ul
				className="hidden text-base font-normal lg:flex lg:gap-12 lg:text-lg lg:font-semibold xl:gap-14
					xl:text-xl"
			>
				<li className="hover:text-cosBlue">
					<Link to="/">Home</Link>
				</li>
				<li className="hover:text-cosBlue">
					<Link to="/AboutUs">About Us</Link>
				</li>
				<li className="hover:text-cosBlue">
					<Link to="/HowItWorks">How it Works</Link>
				</li>
				<li className="hover:text-cosBlue">
					<Link to="/FaQ">FAQs</Link>
				</li>
				<li className="hover:text-cosBlue">
					<Link to="/ContactUs">Contact Us</Link>
				</li>
			</ul>
			<button className="hidden rounded-lg bg-cosBlue p-2 px-3 text-xl text-textWhite lg:block">
				<Link to="/RegisterSchool">Register School</Link>
			</button>

			<div onClick={toggleNavOpen} className="relative z-[200] block text-5xl lg:hidden">
				{isNavOpen ? (
					<i className="ri-close-line text-4xl font-bold"></i>
				) : (
					<i className="ri-menu-fill text-4xl font-bold"></i>
				)}
			</div>

			<div
				className={cnJoin(
					`fixed inset-[0_0_0_auto] z-[150] flex w-full flex-col items-center justify-center
					bg-cosWhite text-black transition-transform duration-500 ease-in-out lg:hidden`,

					isNavOpen ? "translate-x-0" : "-translate-x-full"
				)}
			>
				<ul className="pt-24 text-center text-2xl">
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<Link to="/Homepage">Home</Link>
					</li>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<Link to="/AboutUs">About Us</Link>
					</li>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<Link to="HowItWorks">How it Works</Link>
					</li>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<Link to="/FaQ">FAQs</Link>
					</li>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<Link to="ContactUs">Contact Us</Link>
					</li>
				</ul>
				<button className="rounded-lg bg-cosBlue py-2 text-xl text-textWhite">Get Started</button>
			</div>
		</nav>
	);
};

export default Navbar;
