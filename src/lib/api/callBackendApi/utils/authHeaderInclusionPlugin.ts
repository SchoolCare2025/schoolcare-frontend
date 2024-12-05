import { useQueryClientStore } from "@/store/react-query/queryClientStore";
import { type RequestContext, defineCallApiPlugin } from "@zayne-labs/callapi";
import { toast } from "sonner";

const routesExemptedFromAuthHeader = new Set([
	"/signin",
	"/register/personal-info",
	"/register/address",
	"/admin/verify",
	"/admin/register",
]);

const includeAuthHeader = async (ctx: RequestContext) => {
	const shouldSkipAuthHeaderAddition =
		routesExemptedFromAuthHeader.has(window.location.pathname) ||
		ctx.options.meta?.skipAuthHeaderAddition;

	if (shouldSkipAuthHeaderAddition) return;

	const refreshToken = localStorage.getItem("refreshToken");

	if (!refreshToken) {
		const message = "Session is unavailable! Redirecting to login...";

		toast.error(message, { duration: 2000 });

		throw new Error(message);
	}

	if (!ctx.request.fullURL?.endsWith("/check-user-session") && !ctx.options.meta?.skipSessionCheck) {
		// TODO - Figure out a way to make a callApi refetch just like react query
		await useQueryClientStore.getState().queryClient.refetchQueries({
			queryKey: ["session"],
		});
	}

	const accessToken = localStorage.getItem("accessToken");

	ctx.options.auth = accessToken;
};

const authHeaderInclusionPlugin = defineCallApiPlugin(() => ({
	/* eslint-disable perfectionist/sort-objects */
	id: "authHeader",
	name: "authHeaderPlugin",

	hooks: {
		onRequest: includeAuthHeader,
	},
}));

export { authHeaderInclusionPlugin };
