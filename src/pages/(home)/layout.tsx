import { Outlet } from "react-router";
import { Footer } from "./-components/Footer";

function HomeLayout() {
	return (
		<div className="flex grow flex-col">
			<Outlet />
			<Footer />
		</div>
	);
}

export default HomeLayout;
