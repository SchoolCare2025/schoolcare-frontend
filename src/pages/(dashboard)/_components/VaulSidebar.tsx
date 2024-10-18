import { IconBox } from "@/components/common";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "vaul";

export default function VaulSidebar() {
	// Remove the nonsense styles vaul keeps setting on the body and html element
	useEffect(() => {
		const timeout = setTimeout(() => {
			document.documentElement.removeAttribute("style");
			document.body.removeAttribute("style");
		}, 0);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<Drawer.Root direction="left" open={true}>
			<Drawer.Content
				onLoad={() => {
					document.documentElement.removeAttribute("style");
					document.body.removeAttribute("style");
				}}
				className="sticky inset-y-0 z-[200] w-[271px] shrink-0 bg-white pl-8 outline-none
					data-[vaul-drawer]:[animation-duration:700ms]"
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

				<ul className="mt-7 flex flex-col gap-11">
					<li className="flex items-center gap-3">
						<IconBox icon="mynaui:grid" className="size-5" />
						<Link to="" className="font-medium">
							Dash Board
						</Link>
						<IconBox icon="cuida:caret-right-outline" className="size-[14px]" />
					</li>

					<li className="flex items-center gap-3">
						<IconBox icon="streamline:user-add-plus" className="size-5" />
						<Link to="students/register" className="font-medium">
							Register Students
						</Link>
						<IconBox icon="cuida:caret-right-outline" className="size-[14px]" />
					</li>

					<li className="flex items-center gap-3">
						<IconBox
							icon="streamline:interface-edit-view-eye-eyeball-open-view"
							className="size-5"
						/>
						<Link to="students" className="font-medium">
							View Students
						</Link>
						<IconBox icon="cuida:caret-right-outline" className="size-[14px]" />
					</li>

					<li className="flex items-center gap-3">
						<IconBox icon="fluent:document-one-page-add-24-regular" className="size-5" />
						<Link to="students/subjects/add" className="font-medium">
							Add Subjects
						</Link>
						<IconBox icon="cuida:caret-right-outline" className="size-[14px]" />
					</li>
					<li className="flex items-center gap-3">
						<IconBox icon="solar:upload-minimalistic-linear" className="size-5" />
						<Link to="students/results/add" className="font-medium">
							Input Student Scores
						</Link>
						<IconBox icon="cuida:caret-right-outline" className="size-[14px]" />
					</li>

					<li className="flex items-center gap-3">
						<IconBox icon="mage:logout" className="size-5" />

						<button type="button" className="font-medium">
							Log out
						</button>
					</li>
				</ul>
			</Drawer.Content>
		</Drawer.Root>
	);
}
