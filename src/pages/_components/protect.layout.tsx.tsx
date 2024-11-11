import { callBackendApi } from "@/lib/api/callBackendApi";
import { useQuery } from "@tanstack/react-query";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function ProtectionLayout() {
	const navigate = useNavigate();

	const refreshSession = async (sessionResult: { error: unknown }) => {
		const refreshToken = localStorage.getItem("refreshToken");

		if (sessionResult.error && !refreshToken) {
			navigate("/signin");

			throw sessionResult.error as Error;
		}

		const result = await callBackendApi("/token/refresh/", {
			body: { refresh: refreshToken },
			method: "POST",
		});

		if (result.error) {
			const message = "Session expired! Redirecting to login...";

			toast.error(message, { duration: 2000 });

			navigate("/signin");

			throw new Error(message);
		}

		// FIXME : This is a temporary fix until ferdinand changes response format
		localStorage.setItem("accessToken", (result.data as unknown as { access: string }).access);
	};

	const { data } = useQuery({
		queryFn: async () => {
			const sessionResult = await callBackendApi("/check-user-session/");

			if (sessionResult.error) {
				await refreshSession(sessionResult);

				return callBackendApi("/check-user-session/");
			}

			return sessionResult.data;
		},
		queryKey: ["session"],
		retry: false,
		staleTime: 1 * 60 * 1000,
	});

	if (data) {
		return <Outlet />;
	}

	// TODO - Add auth loading screen
	return null;
}
export default ProtectionLayout;
