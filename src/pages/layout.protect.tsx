import { AuthLoadingSpinner } from "@/components/common";
import { sessionQuery } from "@/store/react-query/queryFactory";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router";

function ProtectionLayout() {
	const { data } = useQuery(sessionQuery());

	if (data) {
		return <Outlet />;
	}

	return <AuthLoadingSpinner />;
}

export default ProtectionLayout;
