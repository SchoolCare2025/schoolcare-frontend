import { Link } from "react-router-dom";
import { Drawer } from "vaul";

export default function VaulSidebar() {
	return (
		<Drawer.Root direction="left" open={true}>
			<Drawer.Content className="sticky inset-y-0 z-[200] w-[271px] pl-8">
				<div className="flex h-full gap-3">
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
				</div>
			</Drawer.Content>
		</Drawer.Root>
	);
}
