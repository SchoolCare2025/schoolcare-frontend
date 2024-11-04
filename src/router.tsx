import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			gcTime: 10 * (60 * 1000),
			staleTime: Infinity,
		},
	},
});

// (primary) - legacy
const AboutUs = lazy(() => import("./pages/(primary)/legacy/AboutUs"));
const ContactUs = lazy(() => import("./pages/(primary)/legacy/ContactUs"));
const FaQ = lazy(() => import("./pages/(primary)/legacy/FaQ"));
const HowItWorks = lazy(() => import("./pages/(primary)/legacy/HowItWorks"));
const LandingPage = lazy(() => import("./pages/(primary)/legacy/LandingPage"));
const MainLayout = lazy(() => import("./pages/(primary)/legacy/MainLayout"));
const WhoWeAre = lazy(() => import("./pages/(primary)/legacy/WhoWeAre"));

const routes = createRoutesFromElements(
	<Route>
		<Route path="/" element={<MainLayout />}>
			<Route index={true} element={<LandingPage />} />
			<Route path="WhoWeAre" element={<WhoWeAre />} />
			<Route path="FaQ" element={<FaQ />} />
			<Route path="ContactUs" element={<ContactUs />} />
			<Route path="HowItWorks" element={<HowItWorks />} />
			<Route path="AboutUs" element={<AboutUs />} />
		</Route>

		<Route path="/signin" Component={lazy(() => import("./pages/(primary)/signin.page"))} />

		<Route path="/register" Component={lazy(() => import("./pages/(primary)/register/layout"))}>
			<Route
				path="personal-info"
				Component={lazy(() => import("./pages/(primary)/register/personal-info.page"))}
			/>
			<Route path="address" Component={lazy(() => import("./pages/(primary)/register/address.page"))} />
		</Route>

		<Route path="/dashboard" Component={lazy(() => import("./pages/(dashboard)/layout"))}>
			<Route index={true} Component={lazy(() => import("./pages/(dashboard)/page"))} />
			<Route
				path="register/student"
				Component={lazy(() => import("./pages/(dashboard)/register/student.page"))}
			/>
			<Route
				path="register/subject"
				Component={lazy(() => import("./pages/(dashboard)/register/subject.page"))}
			/>
			<Route
				path="register/class"
				Component={lazy(() => import("./pages/(dashboard)/register/class.page"))}
			/>

			<Route
				path="students/view-all"
				Component={lazy(() => import("./pages/(dashboard)/students/view-all.page"))}
			/>
			<Route
				path="students/view-single"
				Component={lazy(() => import("./pages/(dashboard)/students/view-single.page"))}
			/>
			<Route
				path="students/add-scores"
				Component={lazy(() => import("./pages/(dashboard)/students/add-scores.page"))}
			/>
		</Route>
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider future={{ v7_startTransition: true }} router={browserRouter} />
			<ReactQueryDevtools buttonPosition="bottom-left" initialIsOpen={false} />
		</QueryClientProvider>
	);
}
