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

			const shouldSkipError =
				!toastMeta?.error ||
				// eslint-disable-next-line ts-eslint/prefer-nullish-coalescing
				toastMeta.errorsToSkip?.includes(ctx.error.name) ||
				toastMeta.errorsToSkipCondition?.(ctx.error);

			if (shouldSkipError) return;

			const errorMessageField = ctx.options.meta?.toast?.errorMessageField ?? "message";

			const errorMessage = isHTTPError(ctx.error)
				? (ctx.error.errorData.errors?.[errorMessageField] ?? ctx.error.message)
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
