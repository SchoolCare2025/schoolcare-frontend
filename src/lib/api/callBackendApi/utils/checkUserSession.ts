import { isHTTPError } from "@zayne-labs/callapi/utils";
import { toast } from "sonner";
import { callBackendApi } from "../callBackendApi";
import { refreshUserSession } from "./refreshUserSession";

const checkUserSession = async () => {
	const { data, error } = await callBackendApi("/check-user-session");

	if (isHTTPError(error)) {
		await refreshUserSession(error);

		return callBackendApi("/check-user-session", { throwOnError: true });
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

export { checkUserSession };
