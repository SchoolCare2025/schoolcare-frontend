import { isHTTPError } from "@zayne-labs/callapi/utils";
import { toast } from "sonner";
import { callBackendApi } from "../callBackendApi";
import type { SessionData } from "../types";

const checkUserSession = async () => {
	const { data, error } = await callBackendApi<SessionData>("/check-user-session");

	if (isHTTPError(error)) {
		await refreshUserSession(error);

		return callBackendApi<SessionData, unknown, "onlySuccess">("/check-user-session", {
			resultMode: "onlySuccess",
			throwOnError: true,
		});
	}

	if (error && error.name !== "AbortError") {
		toast.error(
			error.name === "TypeError"
				? "No network connection"
				: "Something went wrong, please try again later"
		);

		throw error.errorData;
	}

	return data;
};

const navigate = (route: `/${string}`) => window.location.replace(route);

const refreshUserSession = async (sessionError: unknown) => {
	const refreshToken = localStorage.getItem("refreshToken");

	if (sessionError && !refreshToken) {
		navigate("/signin");

		throw sessionError as Error;
	}

	const result = await callBackendApi<{ access: string }>("/token/refresh", {
		body: { refresh: refreshToken },
		meta: { skipAuthHeaderAddition: true },
		method: "POST",
	});

	if (result.error || !result.data.data) {
		const message = "Session expired! Redirecting to login...";

		toast.error(message, { duration: 2000 });

		navigate("/signin");

		throw new Error(message);
	}

	localStorage.setItem("accessToken", result.data.data.access);
};

export { checkUserSession };
