import { sessionQuery } from "@/store/react-query/queryFactory";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

function ProtectionLayout() {
	const { data } = useQuery(sessionQuery());

	if (data) {
		return <Outlet />;
	}

	// TODO - Add auth loading screen
	return null;
}
export default ProtectionLayout;
