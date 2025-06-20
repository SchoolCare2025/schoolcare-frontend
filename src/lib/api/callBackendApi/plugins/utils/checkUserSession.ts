import { isHTTPError } from "@zayne-labs/callapi/utils";
import { callBackendApi, callBackendApiForQuery } from "../../callBackendApi";
import type { SessionData } from "../../types";
import { refreshUserSession } from "./refreshUserSession";

const checkUserSession = async () => {
	const { data, error } = await callBackendApi<SessionData>("/check-user-session", {
		dedupeStrategy: "defer",
	});

	if (data) {
		return data;
	}

	if (isHTTPError(error)) {
		await refreshUserSession();

		return callBackendApiForQuery<SessionData>("/check-user-session");
	}

	throw error.originalError;
};

export { checkUserSession };
