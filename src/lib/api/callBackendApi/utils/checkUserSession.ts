import { hardNavigate } from "@/lib/utils/hardNavigate";
import { isHTTPError } from "@zayne-labs/callapi/utils";
import { toast } from "sonner";
import { callBackendApi } from "../callBackendApi";
import type { SessionData } from "../types";

const checkUserSession = async () => {
	const { data, error } = await callBackendApi<SessionData>("/check-user-session", {
		dedupeStrategy: "defer",
	});

	if (isHTTPError(error)) {
		await refreshUserSession(error);

		return callBackendApi<SessionData, unknown, "onlySuccess">("/check-user-session", {
			resultMode: "onlySuccess",
			throwOnError: true,
		});
	}

	if (error && error.name === "AbortError") {
		return data;
	}

	if (error) {
		error.name === "TypeError" && toast.error("No network connection");

		throw error.errorData;
	}

	return data;
};

const refreshUserSession = async (sessionError: unknown) => {
	const refreshToken = localStorage.getItem("refreshToken");

	if (sessionError && !refreshToken) {
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

export { checkUserSession };
