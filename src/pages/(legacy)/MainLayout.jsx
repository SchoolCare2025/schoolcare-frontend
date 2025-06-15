import { Outlet } from "react-router";
import { Footer } from "../(home)/-components/Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default MainLayout;
