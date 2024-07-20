import { RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';
import { LandingPage } from "./pages/LandingPage";
import WhoWeAre from "./pages/WhoWeAre";
import FaQ from "./pages/FaQ";
import ContactUs from "./pages/ContactUs";

function App() {
  const routes = createBrowserRouter([
    { path: '/', element: <MainLayout />, children: ([
      {index: true, element: <LandingPage />},
     {path: '/WhoWeAre', element: <WhoWeAre />},
     {path: '/FaQ', element: <FaQ/>},
     {path: '/ContactUs', element: <ContactUs/>},
    ]) }
  ]);
  
  return( <RouterProvider router={routes} />);
}
export default App;
