import { Outlet } from "react-router";

function HomeLayout() {
	return (
		<div className="flex grow flex-col">
			<Outlet />
		</div>
	);
}

export default HomeLayout;
