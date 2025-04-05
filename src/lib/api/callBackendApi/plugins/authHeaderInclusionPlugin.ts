import { type ResponseErrorContext, definePlugin } from "@zayne-labs/callapi";
import { hardNavigate } from "@zayne-labs/toolkit/core";
import { toast } from "sonner";
import type { ApiErrorResponse } from "../callBackendApi";
import { refreshUserSession } from "../utils/refreshUserSession";

const routesExemptedFromAuthHeader = new Set([
	"/signin",
	"/register/personal-info",
	"/register/address",
	"/admin/verify",
	"/admin/register",
]);

const authHeaderInclusionPlugin = definePlugin(() => ({
	/* eslint-disable perfectionist/sort-objects */
	id: "authHeader",
	name: "authHeaderPlugin",

	hooks: {
		onRequest: (ctx) => {
			const shouldSkipAuthHeaderAddition =
				routesExemptedFromAuthHeader.has(window.location.pathname) ||
				ctx.options.meta?.skipAuthHeaderAddition;

			if (shouldSkipAuthHeaderAddition) return;

			const refreshToken = localStorage.getItem("refreshToken");

			if (!refreshToken) {
				const message = "Session is missing! Redirecting to login...";

				toast.error(message);

				hardNavigate("/signin");

				throw new Error(message);
			}

			// == Method 1: Execute the entire session query on every protected request
			// if (
			// 	!ctx.options.fullURL?.endsWith("/check-user-session") &&
			// 	!ctx.options.meta?.skipSessionCheck
			// ) {
			// 	await useQueryClientStore
			// 		.getState()
			// 		.queryClient.refetchQueries({ queryKey: sessionQuery().queryKey });
			// }

			const accessToken = localStorage.getItem("accessToken");

			ctx.options.auth = accessToken;
		},

		// == Method 2: Only refreshUserSession on auth token related errors, and remake the request
		onResponseError: async (ctx: ResponseErrorContext<ApiErrorResponse>) => {
			const isAuthTokenRelatedError =
				("code" in ctx.error.errorData && ctx.error.errorData.code === "token_not_valid") ||
				("detail" in ctx.error.errorData &&
					ctx.error.errorData.detail === "Authentication credentials were not provided.");
			// const isAuthTokenRelatedError =
			// 	"code" in ctx.error.errorData && ctx.error.errorData.code === "token_not_valid";

			if (ctx.response.status === 401 && isAuthTokenRelatedError) {
				await refreshUserSession(ctx.error);

				// ctx.options.retryStatusCodes = [...(ctx.options.retryStatusCodes ?? []), 401]; // React query is the one to handle retries here
				// ctx.options.retryAttempts = 1;
			}
		},
	},
	/* eslint-enable perfectionist/sort-objects */
}));

export { authHeaderInclusionPlugin };
