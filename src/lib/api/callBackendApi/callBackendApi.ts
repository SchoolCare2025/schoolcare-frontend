import { type CallApiExtraOptions, createFetchClient } from "@zayne-labs/callapi";
import type { UnmaskType } from "@zayne-labs/toolkit/type-helpers";
import { includeAuthToRequest } from "./utils/includeAuthToRequest";

const fetchClient = createFetchClient({
	baseURL: "https://srm-api.onrender.com/api",

	onRequest: (ctx) => includeAuthToRequest(ctx),
});

type ApiSuccessResponse<TData> = UnmaskType<{
	data: TData | null;
	message: string;
	status: "success";
}>;

type ApiErrorResponse<TErrorData = unknown> = UnmaskType<{
	error?: TErrorData & { message?: string };
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
