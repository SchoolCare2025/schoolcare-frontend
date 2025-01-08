import { type CallApiConfig, type CallApiParameters, createFetchClient } from "@zayne-labs/callapi";
import type { UnmaskType } from "@zayne-labs/toolkit/type-helpers";
import { toastPlugin } from "./plugins";
import { authHeaderInclusionPlugin } from "./plugins/authHeaderInclusionPlugin";

type GlobalMeta = {
	skipAuthHeaderAddition?: boolean;
	skipSessionCheck?: boolean;
	toast?: {
		success: boolean;
	};
};

declare module "@zayne-labs/callapi" {
	// eslint-disable-next-line ts-eslint/consistent-type-definitions
	interface Register {
		meta: GlobalMeta;
	}
}

const fetchClient = createFetchClient({
	baseURL: "https://srm-api.onrender.com/api",
	plugins: [authHeaderInclusionPlugin(), toastPlugin()],
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

const callBackendApi = <
	TData = unknown,
	TError = unknown,
	TResultMode extends CallApiConfig["resultMode"] = CallApiConfig["resultMode"],
>(
	...args: CallApiParameters<ApiSuccessResponse<TData>, ApiErrorResponse<TError>, TResultMode>
) => {
	return fetchClient(...args);
};

export { callBackendApi };
