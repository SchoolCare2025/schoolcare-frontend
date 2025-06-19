import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider,
} from "react-router";
import RootLayout from "./pages/layout";
import { dashboardLoader, protectionLoader } from "./store/react-query/loaders";
import { useQueryClientStore } from "./store/react-query/queryClientStore";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			gcTime: 10 * (60 * 1000),
			retry: 1,
		},
	},
});

useQueryClientStore.setState({ queryClient });

// Legacy
const ContactUs = lazy(() => import("./pages/(primary)/ContactUs"));
const FaQ = lazy(() => import("./pages/(primary)/FaQ"));
const HowItWorks = lazy(() => import("./pages/(primary)/HowItWorks"));
const WhoWeAre = lazy(() => import("./pages/(primary)/WhoWeAre"));

/* Layouts */
const PrimaryLayout = lazy(() => import("./pages/(primary)/layout"));
const HomeLayout = lazy(() => import("./pages/(home)/layout"));
const ProtectionLayout = lazy(() => import("./pages/layout.protect"));
const RegisterLayout = lazy(() => import("./pages/(auth)/register/layout"));
const DashboardLayout = lazy(() => import("./pages/dashboard/layout"));
const StudentResultLayout = lazy(() => import("./pages/student-result/layout"));
const AdminLayout = lazy(() => import("./pages/admin/layout"));

const routes = createRoutesFromElements(
	<Route element={<RootLayout />}>
		{/* eslint-disable react/no-nested-lazy-component-declarations */}

		<Route path="/test" Component={lazy(() => import("./pages/page.test"))} />

		<Route Component={HomeLayout}>
			<Route path="/" Component={lazy(() => import("./pages/(home)/page"))} />
		</Route>

		<Route element={<PrimaryLayout />}>
			<Route path="/who-we-are" element={<WhoWeAre />} />
			<Route path="/faqs" element={<FaQ />} />
			<Route path="/contact" element={<ContactUs />} />
			<Route path="/how-it-works" element={<HowItWorks />} />
		</Route>

		<Route Component={StudentResultLayout}>
			<Route path="/student-result" Component={lazy(() => import("./pages/student-result/page"))} />
		</Route>

		<Route path="/login" Component={lazy(() => import("./pages/(auth)/login/page"))} />

		<Route Component={RegisterLayout}>
			<Route path="/register" element={<Navigate to="/register/personal-info" />} />

			<Route
				path="/register/personal-info"
				Component={lazy(() => import("./pages/(auth)/register/personal-info.page"))}
			/>

			<Route
				path="/register/address"
				Component={lazy(() => import("./pages/(auth)/register/address.page"))}
			/>
		</Route>

		<Route Component={ProtectionLayout} loader={protectionLoader}>
			<Route path="/dashboard" Component={DashboardLayout}>
				<Route
					index={true}
					loader={dashboardLoader}
					Component={lazy(() => import("./pages/dashboard/page"))}
				/>

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

		<Route Component={AdminLayout}>
			<Route path="/admin/register" Component={lazy(() => import("./pages/admin/register/page"))} />
		</Route>

		{/* eslint-enable react/no-nested-lazy-component-declarations */}
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
