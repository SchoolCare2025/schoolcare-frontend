import { IconBox } from "@/components/common";
import { cnJoin } from "@/lib/utils/cn";
import { lockScroll } from "@zayne-labs/toolkit-core";
import { useToggle } from "@zayne-labs/toolkit-react";
import { NavLink } from "react-router";
import Logo from "../../assets/images/logoTrans.png";

const Navbar = () => {
	const [isNavShow, toggleNavShow] = useToggle(false);

	const handleToggleNavShow = () => {
		const newIsNavShow = !isNavShow;

		lockScroll({ lock: newIsNavShow });

		toggleNavShow(newIsNavShow);
	};

	return (
		<nav className="relative flex items-center justify-between bg-cosWhite px-12 py-4">
			<NavLink to="/" className="block">
				<img src={Logo} alt="Logo" className="w-[80px]" />
			</NavLink>

			<ul className="hidden text-base font-normal lg:flex lg:gap-12 lg:text-lg xl:gap-14 xl:text-xl">
				<li className="hover:text-cosBlue">
					<NavLink to="/">Home</NavLink>
				</li>
				<li className="hover:text-cosBlue">
					<NavLink to="/about-us">About Us</NavLink>
				</li>
				<li className="hover:text-cosBlue">
					<NavLink to="/how-it-works">How it Works</NavLink>
				</li>
				<li className="hover:text-cosBlue">
					<NavLink to="/faq">FAQs</NavLink>
				</li>
				<li className="hover:text-cosBlue">
					<NavLink to="/contact-us">Contact Us</NavLink>
				</li>
			</ul>

			<button
				type="button"
				className="hidden rounded-lg bg-cosBlue p-2 px-3 text-xl text-textWhite lg:block"
			>
				<NavLink to="/register/personal-info">Register School</NavLink>
			</button>

			<div onClick={handleToggleNavShow} className="relative z-200 text-4xl font-bold lg:hidden">
				{isNavShow ? <IconBox icon="ri:close-line" /> : <IconBox icon="ri:menu-fill" />}
			</div>

			<div
				className={cnJoin(
					`fixed inset-[0_0_0_auto] z-150 flex w-full flex-col items-center justify-center bg-cosWhite
					text-black transition-transform duration-300 ease-in-out lg:hidden`,

					isNavShow ? "translate-x-0" : "-translate-x-full"
				)}
			>
				<ul
					className="pt-24 text-center text-2xl"
					onClick={(event) => {
						if (!(event.target as Element).matches("a")) return;

						handleToggleNavShow();
					}}
				>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<NavLink to="/about-us">About Us</NavLink>
					</li>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<NavLink to="HowItWorks">How it Works</NavLink>
					</li>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<NavLink to="/faq">FAQs</NavLink>
					</li>
					<li className="mx-4 mb-5 hover:text-cosBlue">
						<NavLink to="ContactUs">Contact Us</NavLink>
					</li>
				</ul>

				<button type="button">
					<NavLink
						to="/signin"
						className="block rounded-lg bg-cosBlue px-3 py-2 text-xl text-textWhite"
					>
						Get Started
					</NavLink>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
