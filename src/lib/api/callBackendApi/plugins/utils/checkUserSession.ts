import { isJavascriptError } from "@zayne-labs/callapi/utils";
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

	if (isJavascriptError(error)) {
		throw error.originalError;
	}

	await refreshUserSession();

	return callBackendApiForQuery<SessionData>("/check-user-session");
};

export { checkUserSession };
