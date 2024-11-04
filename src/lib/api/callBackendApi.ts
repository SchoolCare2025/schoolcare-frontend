import { callApi } from "@zayne-labs/callapi";

const callBackendApi = callApi.create({
	baseURL: "https://srm-api.onrender.com/api",
});

export { callBackendApi };
