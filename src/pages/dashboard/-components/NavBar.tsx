import { useQuery } from "@tanstack/react-query";
import { lockScroll } from "@zayne-labs/toolkit-core";
import { useToggle } from "@zayne-labs/toolkit-react";
import { isFunction, isString } from "@zayne-labs/toolkit-type-helpers";
import { Fragment } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { getElementList, IconBox, Image, Show } from "@/components/common";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { sessionQuery } from "@/store/react-query/queryFactory";
import { dashboardLinkItems } from "./constants";

export function NavBar() {
	const [isNavShow, toggleNavShow] = useToggle(false);

	const handleToggleNavShow = () => {
		const newIsNavShow = !isNavShow;

		lockScroll({ lock: newIsNavShow });

		toggleNavShow(newIsNavShow);
	};

	return (
		<header
			id="NavBar"
			className={cnJoin(
				`flex h-[70px] flex-col bg-school-dark-blue px-(--padding-value) [--padding-value:--spacing(5)]
				max-md:sticky max-md:inset-[0_0_auto_0] max-md:z-100 max-md:justify-center md:h-[140px]
				md:bg-white md:px-9`,
				isNavShow && "w-svw pr-[calc(var(--padding-value)+var(--scrollbar-padding))]"
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
				{isNavShow ?
					<IconBox icon="ri:close-line" />
				:	<IconBox icon="ri:menu-fill" />}
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

				<Show.Root when={sessionQueryResult.data?.data?.logo}>
					{(logo) => (
						<>
							<Image src={logo} width={70} height={70} className="rounded-full" />

							<Show.Otherwise>
								<span className="block size-[70px] shrink-0 rounded-full bg-[hsl(0,0%,85%)]" />
							</Show.Otherwise>
						</>
					)}
				</Show.Root>
			</div>
		</section>
	);
}

function MobileNavigation(props: MobileNavProps) {
	const { className, isNavShow, toggleNavShow } = props;

	const pathname = useLocation().pathname;

	const navigate = useNavigate();

	return (
		<section
			className={cnMerge(
				"fixed inset-[0_0_0_auto] mt-[70px] overflow-x-hidden bg-school-dark-blue pt-1 text-white",
				isNavShow ? "w-svw [transition:width_400ms_ease]" : "w-0 [transition:width_200ms_ease]",
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
				render={(item) => (
					<Fragment key={item.label}>
						{isString(item.link) && (
							<NavLink
								data-active={item.link === pathname}
								className="flex h-[42px] items-center gap-3 rounded-r-[10px]"
								to={item.link}
							>
								<IconBox icon={item.icon} className="ml-6 size-5" />
								{item.label}
							</NavLink>
						)}

						{isFunction(item.link) && (
							<button
								type="button"
								className="flex h-[42px] items-center gap-3"
								onClick={item.link(navigate)}
							>
								<IconBox icon={item.icon} className="ml-6 size-5" />
								{item.label}
							</button>
						)}
					</Fragment>
				)}
			/>
		</section>
	);
}
