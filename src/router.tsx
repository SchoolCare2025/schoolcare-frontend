import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// (primary)
const AboutUs = lazy(() => import("./pages/(primary)/AboutUs"));
const ContactUs = lazy(() => import("./pages/(primary)/ContactUs"));
const FaQ = lazy(() => import("./pages/(primary)/FaQ"));
const HowItWorks = lazy(() => import("./pages/(primary)/HowItWorks"));
const LandingPage = lazy(() => import("./pages/(primary)/LandingPage"));
const MainLayout = lazy(() => import("./pages/(primary)/MainLayout"));
const RegisterSchool = lazy(() => import("./pages/(primary)/RegisterSchool"));
const RegisterSchoolAddress = lazy(() => import("./pages/(primary)/RegisterSchoolAddress"));
const WhoWeAre = lazy(() => import("./pages/(primary)/WhoWeAre"));

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
			<Route path="RegisterSchool" element={<RegisterSchool />} />
			<Route path="RegisterSchoolAddress" element={<RegisterSchoolAddress />} />
			<Route path="AboutUs" element={<AboutUs />} />
		</Route>

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
