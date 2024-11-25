import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./pages/layout";
import { useQueryClientStore } from "./store/react-query/queryClientStore";
import { sessionQuery } from "./store/react-query/queryFactory";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			gcTime: 10 * (60 * 1000),
		},
	},
});

useQueryClientStore.setState({ queryClient });

// Legacy
const AboutUs = lazy(() => import("./pages/legacy/AboutUs"));
const ContactUs = lazy(() => import("./pages/legacy/ContactUs"));
const FaQ = lazy(() => import("./pages/legacy/FaQ"));
const HowItWorks = lazy(() => import("./pages/legacy/HowItWorks"));
const LandingPage = lazy(() => import("./pages/legacy/LandingPage"));
const MainLayout = lazy(() => import("./pages/legacy/MainLayout"));
const WhoWeAre = lazy(() => import("./pages/legacy/WhoWeAre"));

const sessionLoader = () => {
	void queryClient.prefetchQuery(sessionQuery());

	return null;
};

const routes = createRoutesFromElements(
	<Route element={<RootLayout />}>
		<Route path="/" element={<MainLayout />}>
			<Route index={true} element={<LandingPage />} />
			<Route path="WhoWeAre" element={<WhoWeAre />} />
			<Route path="FaQ" element={<FaQ />} />
			<Route path="ContactUs" element={<ContactUs />} />
			<Route path="HowItWorks" element={<HowItWorks />} />
			<Route path="AboutUs" element={<AboutUs />} />
		</Route>

		<Route path="/signin" Component={lazy(() => import("./pages/signin.page"))} />

		<Route path="/register" Component={lazy(() => import("./pages/register/layout"))}>
			<Route
				path="personal-info"
				Component={lazy(() => import("./pages/register/personal-info.page"))}
			/>
			<Route path="address" Component={lazy(() => import("./pages/register/address.page"))} />
		</Route>

		<Route Component={lazy(() => import("./pages/protect.layout"))} loader={sessionLoader}>
			<Route path="/dashboard" Component={lazy(() => import("./pages/dashboard/layout"))}>
				<Route index={true} Component={lazy(() => import("./pages/dashboard/page"))} />

				<Route
					path="register/student"
					Component={lazy(() => import("./pages/dashboard/register/student.page"))}
				/>
				<Route
					path="register/subject"
					Component={lazy(() => import("./pages/dashboard/register/subject.page"))}
				/>
				<Route
					path="register/class"
					Component={lazy(() => import("./pages/dashboard/register/class.page"))}
				/>

				<Route
					path="students/view-all"
					Component={lazy(() => import("./pages/dashboard/students/view-all.page"))}
				/>
				<Route
					path="students/view-single"
					Component={lazy(() => import("./pages/dashboard/students/view-single.page"))}
				/>
				<Route
					path="students/input-scores"
					Component={lazy(() => import("./pages/dashboard/students/input-scores/page"))}
				/>
				<Route
					path="students/input-scores/table"
					Component={lazy(() => import("./pages/dashboard/students/input-scores/table.page"))}
				/>
				<Route
					path="students/input-scores/upload"
					Component={lazy(() => import("./pages/dashboard/students/input-scores/upload.page"))}
				/>
			</Route>
		</Route>

		<Route path="/admin" Component={lazy(() => import("./pages/admin/layout"))}>
			<Route path="register" Component={lazy(() => import("./pages/admin/register/page"))} />
		</Route>
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={browserRouter} />
			<ReactQueryDevtools buttonPosition="bottom-left" initialIsOpen={false} />
		</QueryClientProvider>
	);
}
