import { Outlet } from "react-router-dom";
import Navbar from "./_components/Navbar";
import VaulSidebar from "./_components/VaulSidebar";

function DashBoardLayout() {
	return (
		<>
			<Navbar />

			<main className="flex grow bg-[hsl(0,0%,85%)]">
				<VaulSidebar />

				<Outlet />
			</main>
		</>
	);
}

export default DashBoardLayout;
