import { RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";


function App() {
  const routes = createBrowserRouter([
    { path: '/', element: <MainLayout />, children: ([
      {index: true, element: <Homepage />}
    ]) }
  ]);

  return( <RouterProvider router={routes} />);
}

export default App;
