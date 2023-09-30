import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout, HomeLayout, AddUser, AddNote } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <AddNote />,
      },
      {
        path: "users",
        element: <AddUser />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
