import { checkUserSession } from "@/lib/api/callBackendApi/utils";
import { queryOptions } from "@tanstack/react-query";

export const sessionQuery = () => {
	return queryOptions({
		queryFn: () => checkUserSession(),
		queryKey: ["session"],
		retry: false,
		staleTime: 24 * 60 * 60 * 1000,
	});
};
