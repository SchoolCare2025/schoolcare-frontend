import { IconBox, Show, getElementList } from "@/components/common";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { sessionQuery } from "@/store/react-query/queryFactory";
import { useQuery } from "@tanstack/react-query";
import { lockScroll } from "@zayne-labs/toolkit-core";
import { useToggle } from "@zayne-labs/toolkit-react";
import { NavLink, useLocation } from "react-router";
import { dashboardLinkItems } from "./constants";

function Navbar() {
	const [isNavShow, toggleNavShow] = useToggle(false);

	const handleToggleNavShow = () => {
		const newIsNavShow = !isNavShow;

		lockScroll({ isActive: newIsNavShow });

		toggleNavShow(newIsNavShow);
	};

	return (
		<header
			id="NavBar"
			className={cnJoin(
				`bg-school-dark-blue flex h-[70px] flex-col px-5 max-md:sticky max-md:inset-[0_0_auto_0]
				max-md:z-100 max-md:justify-center md:h-[140px] md:bg-white md:px-9`,
				isNavShow && "w-svw pr-[calc(--spacing(5)_+_var(--scrollbar-padding))]"
			)}
		>
			<DesktopNavContent className="max-md:hidden" />

			<MobileNavigation
				className="md:hidden"
				isNavShow={isNavShow}
				toggleNavShow={handleToggleNavShow}
			/>

			<button
				type="button"
				className="z-10 self-end text-[30px] text-white md:hidden"
				onClick={handleToggleNavShow}
			>
				{isNavShow ? <IconBox icon="ri:close-line" /> : <IconBox icon="ri:menu-fill" />}
			</button>
		</header>
	);
}

const [NavLinksList] = getElementList();

type MobileNavProps = {
	className?: string;
	isNavShow: boolean;
	toggleNavShow: () => void;
};

function DesktopNavContent(props: { className?: string }) {
	const { className } = props;
	const sessionQueryResult = useQuery(sessionQuery());

	return (
		<section className={cnMerge("flex h-full items-end justify-between pb-6", className)}>
			<header>
				<h1 className="text-[32px] font-semibold">Hi, Admin!</h1>

				<p className="text-[20px] font-medium">
					Welcome back, {sessionQueryResult.data?.data?.school}
				</p>
			</header>

			<div className="flex items-center gap-6">
				<IconBox icon="material-symbols:notifications-outline-rounded" className="size-8" />
				{/* FIXME - Replace with real avatar */}
				<span className="block size-[70px] shrink-0 rounded-full bg-[hsl(0,0%,85%)]" />
			</div>
		</section>
	);
}

function MobileNavigation(props: MobileNavProps) {
	const { className, isNavShow, toggleNavShow } = props;

	const pathname = useLocation().pathname;

	return (
		<section
			className={cnMerge(
				"bg-school-dark-blue fixed inset-[0_0_0_auto] mt-[70px] overflow-x-hidden pt-1 text-white",
				isNavShow ? "w-svw [transition:width_350ms_ease]" : "w-0 [transition:width_500ms_ease]",
				className
			)}
			onClick={(event) => {
				const element = event.target as HTMLElement;

				element.tagName === "A" && toggleNavShow();
			}}
		>
			<NavLinksList
				as="nav"
				className="flex flex-col gap-5 px-5 text-nowrap"
				each={dashboardLinkItems}
				render={(linkItem) => (
					<Show.Root key={linkItem.label} when={linkItem.link !== null}>
						<NavLink
							data-active={pathname === linkItem.link}
							className="data-[active=true]:bg-school-blue flex h-[42px] items-center gap-3"
							to={linkItem.link as string}
						>
							<IconBox icon={linkItem.icon} className="ml-[18px] size-4" />

							{linkItem.label}
						</NavLink>

						<Show.Otherwise>
							<button type="button" className="flex h-[42px] items-center gap-3">
								<IconBox icon={linkItem.icon} className="ml-[18px] size-4" />

								{linkItem.label}
							</button>
						</Show.Otherwise>
					</Show.Root>
				)}
			/>
		</section>
	);
}

export default Navbar;
