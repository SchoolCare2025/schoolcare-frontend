import { useQueryClientStore } from "@/store/react-query/queryClientStore";
import { sessionQuery } from "@/store/react-query/queryFactory";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
export const protectionLoader = () => {
	void useQueryClientStore.getState().queryClient.prefetchQuery(sessionQuery());

	return null;
};

function ProtectionLayout() {
	const { data } = useQuery(sessionQuery());

	if (data) {
		return <Outlet />;
	}

	// TODO - Add auth loading screen
	return null;
}

export default ProtectionLayout;
