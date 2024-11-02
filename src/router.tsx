import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

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

			<Route path="register">
				<Route
					path="student"
					Component={lazy(() => import("./pages/(dashboard)/register/student.page"))}
				/>
				<Route
					path="subject"
					Component={lazy(() => import("./pages/(dashboard)/register/subject.page"))}
				/>
				<Route
					path="class"
					Component={lazy(() => import("./pages/(dashboard)/register/class.page"))}
				/>
			</Route>

			<Route path="students">
				<Route
					path="view-all"
					Component={lazy(() => import("./pages/(dashboard)/students/view-all.page"))}
				/>
				<Route
					path="view-single"
					Component={lazy(() => import("./pages/(dashboard)/students/view-single.page"))}
				/>
				<Route
					path="add-scores"
					Component={lazy(() => import("./pages/(dashboard)/students/add-scores.page"))}
				/>
			</Route>
		</Route>
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return <RouterProvider future={{ v7_startTransition: true }} router={browserRouter} />;
}
