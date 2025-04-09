import { type CallApiParameters, type ResultModeUnion, createFetchClient } from "@zayne-labs/callapi";
import type { UnmaskType } from "@zayne-labs/toolkit-type-helpers";
import { toastPlugin } from "./plugins";
import { authHeaderInclusionPlugin } from "./plugins/authHeaderInclusionPlugin";

type GlobalMeta = {
	skipAuthHeaderAddition?: boolean;
	skipSessionCheck?: boolean;
	toast?: {
		error?: boolean;
		skipAbortErrorToast?: boolean;
		success?: boolean;
	};
};

declare module "@zayne-labs/callapi" {
	// eslint-disable-next-line ts-eslint/consistent-type-definitions
	interface Register {
		meta: GlobalMeta;
	}
}

const BACKEND_URL = "https://api.schoolcare.com.ng"; // FIXME -  Add this back once CORS is fixed

const API_BASE_URL = "api";

export const sharedFetchClient = createFetchClient({
	baseURL: `${BACKEND_URL}/${API_BASE_URL}`,
	plugins: [authHeaderInclusionPlugin(), toastPlugin()],
});

export type ApiSuccessResponse<TData = unknown> = UnmaskType<{
	data: TData | null;
	message: string;
	status: "success";
}>;

export type ApiErrorResponse<TErrorData = unknown> = UnmaskType<{
	errors?: Record<string, string> & TErrorData & { message?: string };
	message: string;
	status: "error";
}>;

export const callBackendApi = <
	TData = unknown,
	TError = unknown,
	TResultMode extends ResultModeUnion = ResultModeUnion,
>(
	...args: CallApiParameters<ApiSuccessResponse<TData>, ApiErrorResponse<TError>, TResultMode>
) => {
	const [initUrl, config] = args;

	return sharedFetchClient(initUrl, {
		...config,
		meta: {
			...config?.meta,
			toast: {
				error: true,
				skipAbortErrorToast: true,
				...config?.meta?.toast,
			},
		},
	});
};

export const callBackendApiForQuery = <TData = unknown>(
	...args: CallApiParameters<ApiSuccessResponse<TData>, false | undefined>
) => {
	const [initUrl, config] = args;

	return sharedFetchClient(initUrl, {
		resultMode: "onlySuccessWithException",
		throwOnError: true,
		...config,
	});
};
