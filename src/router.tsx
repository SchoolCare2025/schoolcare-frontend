import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const FaQ = lazy(() => import("./pages/FaQ"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const MainLayout = lazy(() => import("./pages/MainLayout"));
const RegisterSchool = lazy(() => import("./pages/RegisterSchool"));
const RegisterSchoolAddress = lazy(() => import("./pages/RegisterSchoolAddress"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre"));

const routes = createRoutesFromElements(
	<Route>
		<Route path="/" element={<MainLayout />}>
			<Route index={true} element={<LandingPage />} />
			<Route path="/WhoWeAre" element={<WhoWeAre />} />
			<Route path="/FaQ" element={<FaQ />} />
			<Route path="/ContactUs" element={<ContactUs />} />
			<Route path="/HowItWorks" element={<HowItWorks />} />
			<Route path="/RegisterSchool" element={<RegisterSchool />} />
			<Route path="/RegisterSchoolAddress" element={<RegisterSchoolAddress />} />
			<Route path="/AboutUs" element={<AboutUs />} />
		</Route>

		{/* <Route path="/dashboard" element={<></>}></Route> */}
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return <RouterProvider future={{ v7_startTransition: true }} router={browserRouter} />;
}
