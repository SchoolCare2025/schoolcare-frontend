import { Outlet } from "react-router";
import { NavBar } from "./-components/NavBar";
import { Sidebar } from "./-components/Sidebar";

function DashBoardLayout() {
	return (
		<div className="flex grow bg-[hsl(0,0%,98%)]">
			<Sidebar className="max-md:hidden" />

			<div className="flex w-full grow flex-col">
				<NavBar />
				<Outlet />
			</div>
		</div>
	);
}

export default DashBoardLayout;
