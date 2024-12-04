import {
	type CallApiConfig,
	type SuccessContext,
	createFetchClient,
	defineCallApiPlugin,
} from "@zayne-labs/callapi";
import type { UnmaskType } from "@zayne-labs/toolkit/type-helpers";
import { toast } from "sonner";
import { authHeaderInclusionPlugin } from "./utils/authHeaderInclusionPlugin";

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

const successToastPlugin = defineCallApiPlugin(() => ({
	/* eslint-disable perfectionist/sort-objects */
	id: "successToast",
	name: "successToastPlugin",

	hooks: {
		onSuccess: (ctx: SuccessContext<{ message: string }>) => {
			const shouldDisplayToast = Boolean(ctx.data.message) && ctx.options.meta?.toast?.success;

			if (!shouldDisplayToast) return;

			toast.success(ctx.data.message);
		},
	},
}));

const fetchClient = createFetchClient({
	baseURL: "https://srm-api.onrender.com/api",
	plugins: [authHeaderInclusionPlugin(), successToastPlugin()],
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
	...args: Parameters<
		typeof fetchClient<ApiSuccessResponse<TData>, ApiErrorResponse<TError>, TResultMode>
	>
) => {
	return fetchClient<ApiSuccessResponse<TData>, ApiErrorResponse<TError>, TResultMode>(...args);
};

export { callBackendApi };
