import { hardNavigate } from "@zayne-labs/toolkit-core";
import { toast } from "sonner";
import { callBackendApi } from "../callBackendApi";

const refreshUserSession = async () => {
	const refreshToken = localStorage.getItem("refreshToken");

	if (!refreshToken) {
		const message = "Session is missing! Redirecting to login...";

		toast.error(message);

		setTimeout(() => hardNavigate("/signin"), 2500);

		throw new Error(message);
	}

	const result = await callBackendApi<{ access: string }>("/token/refresh", {
		body: { refresh: refreshToken },
		meta: {
			skipAuthHeaderAddition: true,
			toast: {
				error: false,
			},
		},
		method: "POST",
	});

	if (result.error || !result.data.data) {
		const message = "Session invalid or expired! Redirecting to login...";

		toast.error(message);

		setTimeout(() => hardNavigate("/signin"), 2500);

		throw new Error(message);
	}

	localStorage.setItem("accessToken", result.data.data.access);
};

export { refreshUserSession };
