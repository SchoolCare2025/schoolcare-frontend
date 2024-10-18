import { Outlet } from "react-router-dom";
import Navbar from "./_components/Navbar";
import VaulSidebar from "./_components/Sidebar";

function DashBoardLayout() {
	return (
		<>
			<Navbar />

			<main className="flex grow">
				<VaulSidebar />

				<div className="grow bg-[hsla(0,0%,85%)]">
					<Outlet />
				</div>
			</main>
		</>
	);
}

export default DashBoardLayout;
