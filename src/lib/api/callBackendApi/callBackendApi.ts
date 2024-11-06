import { createFetchClient } from "@zayne-labs/callapi";
import type { UnmaskType } from "@zayne-labs/toolkit/type-helpers";

const fetchClient = createFetchClient({
	baseURL: "https://srm-api.onrender.com/api",
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

type Params<TData, TError> = Parameters<
	typeof fetchClient<ApiSuccessResponse<TData>, ApiErrorResponse<TError>>
>;

const callBackendApi = <TData = unknown, TError = unknown>(...args: Params<TData, TError>) => {
	const callApiResult = fetchClient<ApiSuccessResponse<TData>, ApiErrorResponse<TError>>(...args);

	return callApiResult;
};

export { callBackendApi };
