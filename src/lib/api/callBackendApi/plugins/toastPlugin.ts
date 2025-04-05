import { type ErrorContext, type SuccessContext, definePlugin } from "@zayne-labs/callapi";
import { isHTTPError } from "@zayne-labs/callapi/utils";
import { isString } from "@zayne-labs/toolkit/type-helpers";
import { toast } from "sonner";
import type { ApiErrorResponse, ApiSuccessResponse } from "../callBackendApi";

const toastPlugin = definePlugin(() => ({
	/* eslint-disable perfectionist/sort-objects */
	id: "toast",
	name: "toastPlugin",

	hooks: {
		onSuccess: (ctx: SuccessContext<ApiSuccessResponse>) => {
			const successMessage = ctx.data.message;

			const shouldDisplayToast = Boolean(successMessage) && ctx.options.meta?.toast?.success;

			if (!shouldDisplayToast) return;

			toast.success(successMessage);
		},

		onError: (ctx: ErrorContext<ApiErrorResponse>) => {
			if (ctx.options.meta?.toast?.skipAbortErrorToast && ctx.error.name === "AbortError") return;

			const errorMessage = isHTTPError(ctx.error)
				? (ctx.error.errorData.errors?.message ?? ctx.error.message)
				: ctx.error.message;

			const shouldDisplayToast = Boolean(errorMessage) && ctx.options.meta?.toast?.error;

			if (!shouldDisplayToast) return;

			toast.error(isString(errorMessage) ? errorMessage : "An unknown error occurred.");
		},
	},
	/* eslint-enable perfectionist/sort-objects */
}));

export { toastPlugin };
