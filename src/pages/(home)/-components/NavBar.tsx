"use client";

import { lockScroll } from "@zayne-labs/toolkit-core";
import { useToggle } from "@zayne-labs/toolkit-react";
import { NavLink } from "react-router";
import { IconBox } from "@/components/common";
import { getElementList } from "@/components/common/For";
import { cnMerge } from "@/lib/utils/cn";

function NavBar() {
	const [isNavShow, toggleNavShow] = useToggle(false);

	const handleToggleNavShow = () => {
		const newIsNavShow = !isNavShow;

		lockScroll({ lock: newIsNavShow });

		toggleNavShow(newIsNavShow);
	};

	return (
		<header
			className={cnMerge(
				"absolute z-500 flex w-full flex-col px-(--padding-value) pt-7 [--padding-value:--spacing(4)]",
				isNavShow && "pr-[calc(var(--padding-value)+var(--scrollbar-padding))]"
			)}
		>
			<DesktopNavigation className="max-lg:hidden" />

			<MobileNavigation
				className="lg:hidden"
				isNavShow={isNavShow}
				toggleNavShow={handleToggleNavShow}
			/>
		</header>
	);
}

export { NavBar };

const linkItems = [
	{ href: "/", title: "Home" },
	{ href: "/who-we-are", title: "Who we Are" },
	{ href: "/how-it-works", title: "How it Works" },
	{ href: "/faqs", title: "FAQs" },
	{ href: "/contact", title: "Contact us" },
];

const [NavLinksList] = getElementList();

function DesktopNavigation({ className }: { className?: string }) {
	return (
		<article
			className={cnMerge(
				`mx-[80px] flex items-center justify-between rounded-[24px] bg-white px-[78px] py-5
				shadow-[0_4px_8px_hsl(150,20%,25%,0.25)]`,
				className
			)}
		>
			<NavLinksList
				as="nav"
				className="flex w-fit gap-14 font-medium"
				each={linkItems}
				render={(linkItem) => (
					<NavLink key={linkItem.title} to={linkItem.href}>
						{linkItem.title}
					</NavLink>
				)}
			/>

			<button type="button">
				<NavLink
					to="/signin"
					className="block rounded-[12px] bg-210-79-44 px-6 py-4 font-semibold text-white"
				>
					Login
				</NavLink>
			</button>
		</article>
	);
}

type MobileNavProps = {
	className?: string;
	isNavShow: boolean;
	toggleNavShow: () => void;
};

function MobileNavigation(props: MobileNavProps) {
	const { className, isNavShow, toggleNavShow } = props;

	return (
		<>
			<article
				className={cnMerge(
					`fixed inset-[0_0_0_auto] w-full overflow-x-hidden bg-school-dark-blue pt-[72px] text-white
					transition-transform duration-300 ease-in-out`,
					// isNavShow ? "translate-x-0" : "translate-x-full",
					isNavShow ? "w-full [transition:width_450ms_ease]" : "w-0 [transition:width_250ms_ease]",
					className
				)}
				onClick={(event) => {
					const element = event.target as HTMLElement;

					element.tagName === "A" && toggleNavShow();
				}}
			>
				<div
					className={cnMerge(
						`flex flex-col gap-[58px] pr-[calc(var(--padding-value)+var(--scrollbar-padding))]
						pl-(--padding-value) [--padding-value:--spacing(6)]`
					)}
				>
					<NavLinksList
						as="nav"
						className={cnMerge("flex flex-col gap-6 text-[14px] text-nowrap")}
						each={linkItems}
						render={(linkItem) => (
							<NavLink
								key={linkItem.title}
								to={linkItem.href}
								className="[.active]:text-school-blue"
							>
								{linkItem.title}
							</NavLink>
						)}
					/>

					<button type="button">
						<NavLink
							to="/signin"
							className="block w-full rounded-[8px] bg-210-79-44 py-2.5 font-semibold text-white"
						>
							Login
						</NavLink>
					</button>
				</div>
			</article>

			<button type="button" className="z-10 w-6 self-end text-white lg:hidden" onClick={toggleNavShow}>
				{isNavShow ?
					<IconBox icon="ri:close-line" className="size-full" />
				:	<IconBox icon="ri:menu-fill" className="size-full" />}
			</button>
		</>
	);
}
