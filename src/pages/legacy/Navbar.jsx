import { useToggle } from "@zayne-labs/toolkit-react";
import clsx from "clsx";
import { Link } from "react-router";
import { twJoin } from "tailwind-merge";
import Logo from "../../assets/images/logoTrans.png";

const cnJoin = (...classNames) => twJoin(clsx(classNames));

const Navbar = () => {
	const [isNavOpen, toggleNavOpen] = useToggle(false);

	return (
		<nav
			className="bg-cosWhite flex items-center justify-between px-12 py-4"
			onClick={(event) => {
				event.target.matches("a") && toggleNavOpen();
			}}
		>
			<Link to="/" className="sxl:w-[5%] block w-[6%]">
				<img src={Logo} alt="Logo" className="w-[12vh]" />
			</Link>
			<ul className="hidden text-base font-normal lg:flex lg:gap-12 lg:text-lg xl:gap-14 xl:text-xl">
				<li className="hover:text-cosBlue">
					<Link to="/">Home</Link>
				</li>
				<li className="hover:text-cosBlue">
					<Link to="/about-us">About Us</Link>
				</li>
				<li className="hover:text-cosBlue">
					<Link to="/how-it-works">How it Works</Link>
				</li>
				<li className="hover:text-cosBlue">
					<Link to="/faq">FAQs</Link>
				</li>
				<li className="hover:text-cosBlue">
					<Link to="/contact-us">Contact Us</Link>
				</li>
			</ul>
			<button className="bg-cosBlue text-textWhite hidden rounded-lg p-2 px-3 text-xl lg:block">
				<Link to="/register/personal-info">Register School</Link>
			</button>

			<div onClick={toggleNavOpen} className="relative z-200 block text-5xl lg:hidden">
				{isNavOpen ? (
					<i className="ri-close-line text-4xl font-bold"></i>
				) : (
					<i className="ri-menu-fill text-4xl font-bold"></i>
				)}
			</div>

			<div
				className={cnJoin(
					`bg-cosWhite fixed inset-[0_0_0_auto] z-150 flex w-full flex-col items-center justify-center
					text-black transition-transform duration-500 ease-in-out lg:hidden`,

					isNavOpen ? "translate-x-0" : "-translate-x-full"
				)}
			>
				<ul className="pt-24 text-center text-2xl">
					<li className="hover:text-cosBlue mx-4 mb-5">
						<Link to="/">Home</Link>
					</li>
					<li className="hover:text-cosBlue mx-4 mb-5">
						<Link to="/about-us">About Us</Link>
					</li>
					<li className="hover:text-cosBlue mx-4 mb-5">
						<Link to="HowItWorks">How it Works</Link>
					</li>
					<li className="hover:text-cosBlue mx-4 mb-5">
						<Link to="/faq">FAQs</Link>
					</li>
					<li className="hover:text-cosBlue mx-4 mb-5">
						<Link to="ContactUs">Contact Us</Link>
					</li>
				</ul>

				<button>
					<Link to="/signin" className="bg-cosBlue text-textWhite block rounded-lg px-3 py-2 text-xl">
						Get Started
					</Link>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
