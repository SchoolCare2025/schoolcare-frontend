import { callBackendApi } from "@/lib/api/callBackendApi";
import { useQueryClientStore } from "@/store/react-query/queryClientStore";
import { sessionQuery } from "@/store/react-query/queryFactory";
import type { AnyFunction } from "@zayne-labs/toolkit-type-helpers";

export const dashboardLinkItems = [
	{
		icon: "mynaui:grid",
		label: "Dash Board",
		link: "/dashboard",
	},
	{
		icon: "fluent:document-one-page-add-24-regular",
		label: "Register Class",
		link: "/dashboard/register/class",
	},
	{
		icon: "fluent:document-one-page-add-24-regular",
		label: "Register Subjects",
		link: "/dashboard/register/subject",
	},
	{
		icon: "streamline:user-add-plus",
		label: "Register Students",
		link: "/dashboard/register/student",
	},

	{
		icon: "streamline:interface-edit-view-eye-eyeball-open-view",
		label: "View All Students",
		link: "/dashboard/students/view-all",
	},
	{
		icon: "streamline:interface-edit-view-eye-eyeball-open-view",
		label: "View Single Student",
		link: "/dashboard/students/view-single",
	},
	{
		icon: "solar:upload-minimalistic-linear",
		label: "Input Student Scores",
		link: "/dashboard/students/input-scores",
	},
	{
		icon: "mage:logout",
		label: "Log out",
		link: (navigate: AnyFunction) => {
			return () => {
				void callBackendApi("/logout", {
					body: {
						refresh: localStorage.getItem("refreshToken"),
					},
					meta: { toast: { success: true } },
					method: "POST",

					onSuccess: () => {
						useQueryClientStore
							.getState()
							.queryClient.removeQueries({ queryKey: sessionQuery().queryKey });

						localStorage.removeItem("accessToken");
						localStorage.removeItem("refreshToken");

						navigate("/");
					},
				});
			};
		},
	},
];
