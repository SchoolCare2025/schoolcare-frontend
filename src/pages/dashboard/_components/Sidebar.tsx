import { IconBox, getElementList } from "@/components/common";
import { Drawer } from "@/components/ui";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { isFunction, isString } from "@zayne-labs/toolkit-type-helpers";
import { Fragment } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { dashboardLinkItems } from "./constants";

const [SideBarLinkList] = getElementList();

function Sidebar(props: { className?: string }) {
	const { className } = props;

	const pathname = useLocation().pathname;

	const navigate = useNavigate();

	return (
		// NOTE - Using the trapFocus prop as a hack to prevent radix within vaul from trapping focus like a massive idiot🙂
		<Drawer.Root direction="left" trapFocus={false} modal={false} open={true} dismissible={false}>
			<aside
				className={cnMerge(
					// NOTE - These classes allow the sidebar to scroll only within itself
					"sticky inset-y-0 h-svh custom-scrollbar min-w-[300px] overflow-y-auto bg-white",
					className
				)}
			>
				<Drawer.Title className="hidden">Sidebar</Drawer.Title>
				<Drawer.Description className="hidden">Sidebar</Drawer.Description>

				<Drawer.Content
					withHandle={false}
					withPortal={false}
					className={cnJoin(
						// NOTE - These classes allow the sidebar to scroll only within itself
						"absolute size-full pt-[100px]",

						`bg-school-dark-blue text-white outline-hidden
						data-vaul-drawer:[animation-duration:1300ms]`
					)}
				>
					<SideBarLinkList
						each={dashboardLinkItems}
						className="flex flex-col gap-6 bg-inherit pb-15 font-medium"
						render={(item) => (
							<Fragment key={item.label}>
								{isString(item.link) && (
									<NavLink
										data-active={item.link === pathname}
										className="flex h-[42px] items-center gap-3 rounded-r-[10px]
											data-[active=true]:bg-school-blue"
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
				</Drawer.Content>
			</aside>
		</Drawer.Root>
	);
}

export { Sidebar };
