import { type CallApiExtraOptions, createFetchClient } from "@zayne-labs/callapi";
import type { UnmaskType } from "@zayne-labs/toolkit/type-helpers";
import { toast } from "sonner";

const exemptedRoutesFromAuth = new Set(["/signin", "/register/personal-info", "/register/address"]);

const fetchClient = createFetchClient({
	baseURL: "https://srm-api.onrender.com/api",

	onRequest: (ctx) => {
		const accessToken = localStorage.getItem("accessToken");
		const refreshToken = localStorage.getItem("refreshToken");

		const isTokenAbsent = !refreshToken || !accessToken;

		if (!exemptedRoutesFromAuth.has(window.location.pathname) && isTokenAbsent) {
			const message = "Session is unavailable! Redirecting to login...";

			toast.error(message, { duration: 2000 });

			throw new Error(message);
		}

		ctx.options.auth = accessToken;
	},
});

type ApiSuccessResponse<TData> = UnmaskType<{
	data: TData | null;
	message: string;
	status: "success";
}>;

type ApiErrorResponse<TErrorData = unknown> = UnmaskType<{
	error?: TErrorData;
	message: string;
	status: "error";
}>;

type Params<TData, TError, TResultMode extends CallApiExtraOptions["resultMode"]> = Parameters<
	typeof fetchClient<ApiSuccessResponse<TData>, ApiErrorResponse<TError>, TResultMode>
>;

const callBackendApi = <
	TData = unknown,
	TError = unknown,
	TResultMode extends CallApiExtraOptions["resultMode"] = CallApiExtraOptions["resultMode"],
>(
	...args: Params<TData, TError, TResultMode>
) => {
	const callApiResult = fetchClient<ApiSuccessResponse<TData>, ApiErrorResponse<TError>, TResultMode>(
		...args
	);

	return callApiResult;
};

export { callBackendApi };
