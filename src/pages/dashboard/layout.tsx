import { Outlet } from "react-router";
import Navbar from "./_components/Navbar";
import VaulSidebar from "./_components/VaulSidebar";

function DashBoardLayout() {
	return (
		<>
			<Navbar />

			<div className="flex grow bg-[hsl(0,0%,85%)]">
				<VaulSidebar />

				<Outlet />
			</div>
		</>
	);
}

export default DashBoardLayout;
