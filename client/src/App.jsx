import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout, HomeLayout, Error } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
