import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  AddUser,
  AddNote,
  AllNotes,
  AllUsers,
  EditNote,
  Error,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
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
        path: "edit-note/:id",
        element: <EditNote />,
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
