import { Outlet } from "react-router";
import { Navbar } from "./_components/Navbar";
import { Sidebar } from "./_components/Sidebar";

function DashBoardLayout() {
	return (
		<div className="flex grow bg-[hsl(0,0%,92%)]">
			<Sidebar className="max-md:hidden" />

			<div className="flex w-full grow flex-col">
				<Navbar />
				<Outlet />
			</div>
		</div>
	);
}

export default DashBoardLayout;
