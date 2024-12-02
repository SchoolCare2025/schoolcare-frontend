import { IconBox, Show, getElementList } from "@/components/common";
import { RouteIndicator } from "@/components/icons";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "vaul";

const sideBarLinksArray = [
	{
		icon: "mynaui:grid",
		label: "Dash Board",
		link: "/dashboard",
	},
	{
		icon: "fluent:document-one-page-add-24-regular",
		label: "Register Class",
		link: "/dashboard/register/class",
	},
	{
		icon: "fluent:document-one-page-add-24-regular",
		label: "Register Subjects",
		link: "/dashboard/register/subject",
	},
	{
		icon: "streamline:user-add-plus",
		label: "Register Students",
		link: "/dashboard/register/student",
	},

	{
		icon: "streamline:interface-edit-view-eye-eyeball-open-view",
		label: "View All Students",
		link: "/dashboard/students/view-all",
	},
	{
		icon: "streamline:interface-edit-view-eye-eyeball-open-view",
		label: "View Single Student",
		link: "/dashboard/students/view-single",
	},
	{
		icon: "solar:upload-minimalistic-linear",
		label: "Input Student Scores",
		link: "/dashboard/students/input-scores",
	},
	{
		icon: "mage:logout",
		label: "Log out",
		link: null,
	},
];

export default function VaulSidebar() {
	const [SideBarLinkList] = getElementList();

	const pathname = useLocation().pathname;

	return (
		// NOTE - These classes allow the sidebar to scroll only within itself
		<aside className="custom-scrollbar relative min-w-[300px] overflow-y-auto">
			<Drawer.Root direction="left" modal={false} open={true} dismissible={false}>
				{/* NOTE - Use this hack to prevent radix within vaul from trapping focus like a massive idiot🙂 */}
				<FocusScope trapped={false} className="contents">
					<Drawer.Content
						// NOTE - These classes allow the sidebar to scroll only within itself
						className="absolute min-h-full bg-white pb-10 pl-8 outline-none
							data-[vaul-drawer]:[animation-duration:1300ms]"
					>
						<header className="flex gap-3">
							<span className="block size-[70px] shrink-0 rounded-full bg-[hsl(0,0%,85%)]" />

							<div className="mt-5 flex flex-col">
								<Drawer.Title className="text-[14px] font-semibold">
									Redeemed Secondary School
								</Drawer.Title>

								<Drawer.Description
									asChild={true}
									className="w-fit border-b border-b-black text-[10px] font-medium"
								>
									<Link to="/dashboard">View school profile</Link>
								</Drawer.Description>
							</div>
						</header>

						<SideBarLinkList
							className="mt-7 flex flex-col gap-11"
							each={sideBarLinksArray}
							render={(item) => (
								<li key={item.label} className="relative flex items-center gap-3">
									{pathname === item.link && <RouteIndicator className="absolute" />}

									<IconBox icon={item.icon} className="ml-5 size-5" />

									<Show when={item.link !== null}>
										<Show.Content>
											<Link to={item.link as string} className="font-medium">
												{item.label}
												<IconBox
													icon="cuida:caret-right-outline"
													className="ml-3 inline-block size-[14px]"
												/>
											</Link>
										</Show.Content>

										<Show.Fallback>
											<button type="button" className="font-medium">
												Log out
											</button>
										</Show.Fallback>
									</Show>
								</li>
							)}
						/>
					</Drawer.Content>
				</FocusScope>
			</Drawer.Root>
		</aside>
	);
}
