import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Stepper from "./pages/Stepper";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/stepper",
      element: <Stepper/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
