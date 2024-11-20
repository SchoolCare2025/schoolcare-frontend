import { type CallApiConfig, type SuccessContext, createFetchClient } from "@zayne-labs/callapi";
import type { UnmaskType } from "@zayne-labs/toolkit/type-helpers";
import { toast } from "sonner";
import { includeAuthToRequest } from "./utils/includeAuthToRequest";

/* eslint-disable ts-eslint/consistent-type-definitions */

type GlobalMeta = {
	skipAuthHeaderAddition?: boolean;
	skipSessionCheck?: boolean;
	toast?: {
		success: boolean;
	};
};

declare module "@zayne-labs/callapi" {
	interface Register {
		meta: GlobalMeta;
	}
}

const fetchClient = createFetchClient({
	baseURL: "https://srm-api.onrender.com/api",

	onRequest: (ctx) => includeAuthToRequest(ctx),

	onSuccess: [
		(ctx: SuccessContext<{ message: string }>) => {
			const shouldDisplayToast = !ctx.data.message || !ctx.options.meta?.toast?.success;

			if (shouldDisplayToast) return;

			toast.success(ctx.data.message);
		},
	],
});

type ApiSuccessResponse<TData> = UnmaskType<{
	data: TData | null;
	message: string;
	status: "success";
}>;

type ApiErrorResponse<TErrorData = unknown> = UnmaskType<{
	errors?: Record<string, string> & TErrorData & { message?: string };
	message: string;
	status: "error";
}>;

type Params<TData, TError, TResultMode extends CallApiConfig["resultMode"]> = Parameters<
	typeof fetchClient<ApiSuccessResponse<TData>, ApiErrorResponse<TError>, TResultMode>
>;

const callBackendApi = <
	TData = unknown,
	TError = unknown,
	TResultMode extends CallApiConfig["resultMode"] = CallApiConfig["resultMode"],
>(
	...args: Params<TData, TError, TResultMode>
) => {
	const callApiResult = fetchClient<ApiSuccessResponse<TData>, ApiErrorResponse<TError>, TResultMode>(
		...args
	);

	return callApiResult;
};

export { callBackendApi };
