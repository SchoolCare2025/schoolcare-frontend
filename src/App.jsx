import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import "remixicon/fonts/remixicon.css";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs";
import FaQ from "./pages/FaQ";
import HowItWorks from "./pages/HowItWorks";
import LandingPage from "./pages/LandingPage";
import RegisterSchool from "./pages/RegisterSchool";
import RegisterSchoolAddress from "./pages/RegisterSchoolAddress.jsx";
import WhoWeAre from "./pages/WhoWeAre";

function App() {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <MainLayout />,
			children: [
				{ index: true, element: <LandingPage /> },
				{ path: "/WhoWeAre", element: <WhoWeAre /> },
				{ path: "/FaQ", element: <FaQ /> },
				{ path: "/ContactUs", element: <ContactUs /> },
				{ path: "/HowItWorks", element: <HowItWorks /> },
				{ path: "/RegisterSchool", element: <RegisterSchool /> },
				{ path: "/RegisterSchoolAddress", element: <RegisterSchoolAddress /> },
				{ path: "/AboutUs", element: <AboutUs className="mb-40 mt-20" /> },
			],
		},
	]);

	return <RouterProvider router={routes} />;
}
export default App;
