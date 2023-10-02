import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  DashboardLayout,
  HomeLayout,
  AddUser,
  AddNote,
  AllNotes,
  AllUsers,
} from "./pages";

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
        path: "all-notes",
        element: <AllNotes />,
      },
      {
        path: "add-user",
        element: <AddUser />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
