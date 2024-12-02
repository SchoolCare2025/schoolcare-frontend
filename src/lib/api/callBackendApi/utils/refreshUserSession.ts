import { toast } from "sonner";
import { callBackendApi } from "../callBackendApi";

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

	// FIXME : This is a temporary fix until ferdinand changes response format
	localStorage.setItem("accessToken", result.data.data.access);
};

export { refreshUserSession };
