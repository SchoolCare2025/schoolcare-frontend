import { RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';
import { LandingPage } from "./pages/LandingPage";
import WhoWeAre from "./pages/WhoWeAre";
import FaQ from "./pages/FaQ";
import ContactUs from "./pages/ContactUs";
import HowItWorks from "./pages/HowItWorks";
import RegisterSchool from "./pages/RegisterSchool";
import RegisterSchoolAdress from "./pages/RegisterSchoolAdress.jsx";
import AboutUs from "./pages/AboutUs.jsx";

function App() {
  const routes = createBrowserRouter([
    { path: '/', element: <MainLayout />, children: ([
      {index: true, element: <LandingPage />},
     {path: '/WhoWeAre', element: <WhoWeAre />},
     {path: '/FaQ', element: <FaQ/>},
     {path: '/ContactUs', element: <ContactUs />},
     {path: '/HowItWorks', element: <HowItWorks />},
     {path: '/RegisterSchool', element: <RegisterSchool />},
     {path: '/RegisterSchoolAdress', element: <RegisterSchoolAdress />},
     {path: '/AboutUs' , element: <AboutUs />},
    ])
  },

    // {path: 'RegisterSchool', element: <RegisterSchool />, children: [
    //   {index: true, element: <RegisterSchool />}
    // ]}
  ]);

  return( <RouterProvider router={routes} />);
}
export default App;
