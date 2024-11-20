import { Outlet } from "react-router-dom";

function AdminLayout() {
	return (
		<div className="flex flex-col gap-6 px-12 py-[56px] md:gap-16 md:px-[100px] md:py-[92px]">
			<Outlet />
		</div>
	);
}

export default AdminLayout;
