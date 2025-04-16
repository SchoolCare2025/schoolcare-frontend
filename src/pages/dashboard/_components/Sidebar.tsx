import { IconBox, Show, getElementList } from "@/components/common";
import { Drawer } from "@/components/ui";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { NavLink, useLocation } from "react-router";
import { dashboardLinkItems } from "./constants";

const [SideBarLinkList] = getElementList();

function Sidebar(props: { className?: string }) {
	const { className } = props;

	const pathname = useLocation().pathname;

	return (
		// NOTE - Using the trapFocus prop as a hack to prevent radix within vaul from trapping focus like a massive idiot🙂
		<Drawer.Root direction="left" trapFocus={false} modal={false} open={true} dismissible={false}>
			<aside
				className={cnMerge(
					// NOTE - These classes allow the sidebar to scroll only within itself
					"custom-scrollbar sticky inset-y-0 h-svh min-w-[300px] overflow-y-auto bg-white",
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
						className="flex flex-col gap-6 bg-inherit font-medium"
						render={(item) => (
							<Show.Root key={item.label} when={item.link !== null}>
								<NavLink
									data-active={item.link === pathname}
									className="data-[active=true]:bg-school-blue flex h-[42px] items-center gap-3
										rounded-r-[10px]"
									to={item.link as string}
								>
									<IconBox icon={item.icon} className="ml-6 size-5" />
									{item.label}
								</NavLink>

								<Show.Otherwise>
									<button type="button" className="flex h-[42px] items-center gap-3">
										<IconBox icon={item.icon} className="ml-6 size-5" />
										{item.label}
									</button>
								</Show.Otherwise>
							</Show.Root>
						)}
					/>
				</Drawer.Content>
			</aside>
		</Drawer.Root>
	);
}

export { Sidebar };
