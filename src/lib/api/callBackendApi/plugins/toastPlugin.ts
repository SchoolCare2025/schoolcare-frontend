import { type ErrorContext, type SuccessContext, definePlugin } from "@zayne-labs/callapi";
import { isHTTPError } from "@zayne-labs/callapi/utils";
import { toast } from "sonner";
import type { ApiErrorResponse, ApiSuccessResponse } from "../callBackendApi";

const toastPlugin = definePlugin(() => ({
	/* eslint-disable perfectionist/sort-objects */
	id: "toast",
	name: "toastPlugin",

	hooks: {
		/* eslint-enable perfectionist/sort-objects */

		onError: (ctx: ErrorContext<ApiErrorResponse>) => {
			const toastMeta = ctx.options.meta?.toast;

			if (!toastMeta?.error || toastMeta.errorsToSkip?.includes(ctx.error.name)) return;

			const errorMessage = isHTTPError(ctx.error)
				? (ctx.error.errorData.errors?.message ?? ctx.error.message)
				: ctx.error.message;

			errorMessage && toast.error(errorMessage);
		},

		onSuccess: (ctx: SuccessContext<ApiSuccessResponse>) => {
			const successMessage = ctx.data.message;

			const shouldDisplayToast = Boolean(successMessage) && ctx.options.meta?.toast?.success;

			if (!shouldDisplayToast) return;

			toast.success(successMessage);
		},
	},
}));

export { toastPlugin };
