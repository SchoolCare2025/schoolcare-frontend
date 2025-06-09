import { Outlet } from "react-router";

function RootLayout() {
	return (
		<div className="flex min-h-svh flex-col">
			<Outlet />
		</div>
	);
}

export default RootLayout;
