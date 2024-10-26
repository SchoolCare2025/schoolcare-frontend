import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// (primary)
const SignInPage = lazy(() => import("./pages/(primary)/signin.page"));
const RegisterSchoolPersonalInfo = lazy(() => import("./pages/(primary)/register/personal-info.page"));
const RegisterSchoolAddress = lazy(() => import("./pages/(primary)/register/address.page"));

// (primary) - legacy
const AboutUs = lazy(() => import("./pages/(primary)/legacy/AboutUs"));
const ContactUs = lazy(() => import("./pages/(primary)/legacy/ContactUs"));
const FaQ = lazy(() => import("./pages/(primary)/legacy/FaQ"));
const HowItWorks = lazy(() => import("./pages/(primary)/legacy/HowItWorks"));
const LandingPage = lazy(() => import("./pages/(primary)/legacy/LandingPage"));
const MainLayout = lazy(() => import("./pages/(primary)/legacy/MainLayout"));
const WhoWeAre = lazy(() => import("./pages/(primary)/legacy/WhoWeAre"));

// (dashboard)
const DashboardLayout = lazy(() => import("./pages/(dashboard)/layout"));
const DashboardPage = lazy(() => import("./pages/(dashboard)/page"));
// (dashboard)/register
const RegisterClassPage = lazy(() => import("./pages/(dashboard)/register/class.page"));
const RegisterStudentPage = lazy(() => import("./pages/(dashboard)/register/student.page"));
const RegisterSubjectPage = lazy(() => import("./pages/(dashboard)/register/subject.page"));
// (dashboard)/students
const AddScoresPage = lazy(() => import("./pages/(dashboard)/students/add-scores.page"));
const ViewAllStudentsPage = lazy(() => import("./pages/(dashboard)/students/view-all.page"));
const ViewSingleStudentPage = lazy(() => import("./pages/(dashboard)/students/view-single.page"));

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

		<Route path="/signin" element={<SignInPage />} />
		<Route path="/register/personal-info" element={<RegisterSchoolPersonalInfo />} />
		<Route path="/register/address" element={<RegisterSchoolAddress />} />

		<Route path="/dashboard" element={<DashboardLayout />}>
			<Route index={true} element={<DashboardPage />} />
			<Route path="register/student" element={<RegisterStudentPage />} />
			<Route path="register/subject" element={<RegisterSubjectPage />} />
			<Route path="register/class" element={<RegisterClassPage />} />
			<Route path="students/view-all" element={<ViewAllStudentsPage />} />
			<Route path="students/view-single" element={<ViewSingleStudentPage />} />
			<Route path="students/add-scores" element={<AddScoresPage />} />
		</Route>
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return <RouterProvider future={{ v7_startTransition: true }} router={browserRouter} />;
}
