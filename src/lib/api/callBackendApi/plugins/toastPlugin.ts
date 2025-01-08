import { type SuccessContext, defineCallApiPlugin } from "@zayne-labs/callapi";
import { toast } from "sonner";

const toastPlugin = defineCallApiPlugin(() => ({
	/* eslint-disable perfectionist/sort-objects */
	id: "toast",
	name: "toastPlugin",

	hooks: {
		onSuccess: (ctx: SuccessContext<{ message: string }>) => {
			const shouldDisplayToast = Boolean(ctx.data.message) && ctx.options.meta?.toast?.success;

			if (!shouldDisplayToast) return;

			toast.success(ctx.data.message);
		},
	},
	/* eslint-enable perfectionist/sort-objects */
}));

export { toastPlugin };
