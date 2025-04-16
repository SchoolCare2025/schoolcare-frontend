import { useQueryClientStore } from "./queryClientStore";
import { sessionQuery } from "./queryFactory";

export const protectionLoader = () => {
	void useQueryClientStore.getState().queryClient.prefetchQuery(sessionQuery());

	return null;
};
