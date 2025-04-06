import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy } from "react";
import {
	Navigate,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router";
import RootLayout from "./pages/layout";
import { protectionLoader } from "./pages/layout.protect";
import { useQueryClientStore } from "./store/react-query/queryClientStore";

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

const routes = createRoutesFromElements(
	<Route element={<RootLayout />}>
		<Route element={<MainLayout />}>
			<Route path="/" element={<LandingPage />} />
			<Route path="/who-we-are" element={<WhoWeAre />} />
			<Route path="/faq" element={<FaQ />} />
			<Route path="/contact-us" element={<ContactUs />} />
			<Route path="/how-it-works" element={<HowItWorks />} />
			<Route path="/about-us" element={<AboutUs />} />
		</Route>

		<Route path="/signin" Component={lazy(() => import("./pages/signin.page"))} />

		<Route path="/register" Component={lazy(() => import("./pages/register/layout"))}>
			<Route index={true} element={<Navigate to="/register/personal-info" />} />

			<Route
				path="personal-info"
				Component={lazy(() => import("./pages/register/personal-info.page"))}
			/>

			<Route path="address" Component={lazy(() => import("./pages/register/address.page"))} />
		</Route>

		<Route Component={lazy(() => import("./pages/layout.protect"))} loader={protectionLoader}>
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
					Component={lazy(() => import("./pages/dashboard/students/view-all/page"))}
				/>
				<Route
					path="students/view-all/table"
					Component={lazy(() => import("./pages/dashboard/students/view-all/table.page"))}
				/>
				<Route
					path="students/view-single"
					Component={lazy(() => import("./pages/dashboard/students/view-single/page"))}
				/>
				<Route
					path="students/view-single/table"
					Component={lazy(() => import("./pages/dashboard/students/view-single/table.page"))}
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

		<Route Component={lazy(() => import("./pages/admin/layout"))}>
			<Route path="/admin/register" Component={lazy(() => import("./pages/admin/register/page"))} />
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
