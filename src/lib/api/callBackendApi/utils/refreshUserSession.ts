import type { PossibleHTTPError } from "@zayne-labs/callapi";
import { hardNavigate } from "@zayne-labs/toolkit/core";
import { toast } from "sonner";
import { type ApiErrorResponse, callBackendApi } from "../callBackendApi";

const refreshUserSession = async (sessionError: PossibleHTTPError<ApiErrorResponse>) => {
	const refreshToken = localStorage.getItem("refreshToken");

	if (!refreshToken) {
		hardNavigate("/signin");

		throw sessionError as Error;
	}

	const result = await callBackendApi<{ access: string }>("/token/refresh", {
		body: { refresh: refreshToken },
		meta: { skipAuthHeaderAddition: true },
		method: "POST",
	});

	if (result.error || !result.data.data) {
		const message = "Session expired! Redirecting to login...";

		toast.error(message);

		hardNavigate("/signin");

		throw new Error(message);
	}

	localStorage.setItem("accessToken", result.data.data.access);
};

export { refreshUserSession };
