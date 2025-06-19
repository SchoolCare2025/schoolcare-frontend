import { Outlet } from "react-router";
import { Footer } from "../(home)/-components/Footer";
import { NavBar } from "./-components/NavBar";

const MainLayout = () => {
	return (
		<>
			<NavBar />

			<div className="flex grow flex-col pt-[84px] lg:pt-[200px]">
				<Outlet />
			</div>

			<Footer />
		</>
	);
};

export default MainLayout;
