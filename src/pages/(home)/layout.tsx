import { Outlet } from "react-router";

function HomeLayout() {
	return (
		<div className="flex grow flex-col bg-[hsl(0,0%,98%)]">
			<Outlet />
		</div>
	);
}

export default HomeLayout;
