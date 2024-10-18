import { Outlet } from "react-router-dom";
import Navbar from "./_components/Navbar";
import VaulSidebar from "./_components/VaulSidebar";

function DashBoardLayout() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />

			<div className="flex grow bg-[hsl(0,0%,85%)]">
				<VaulSidebar />

				<Outlet />
			</div>
		</div>
	);
}

export default DashBoardLayout;
