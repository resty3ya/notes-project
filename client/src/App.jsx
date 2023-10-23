import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  AddUser,
  AddNote,
  AllNotes,
  AllUsers,
  EditNote,
  EditUser,
  Error,
} from "./pages";

// import { action as addNoteAction } from "./pages/AddNote";
// import { loader as allNotesLoader } from "./pages/AllNotes";
import { loader as allUsersLoader } from "./pages/AllUsers";
import { action as AddUserAction } from "./pages/AddUser";
import { loader as EditUserLoader } from "./pages/EditUser";
import { action as EditUserAction } from "./pages/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AddNote />,
        // action: addNoteAction,
      },
      {
        path: "all-notes",
        element: <AllNotes />,
        // action: allNotesLoader,
      },
      {
        path: "edit-note/:id",
        element: <EditNote />,
      },
      {
        path: "add-user",
        element: <AddUser />,
        action: AddUserAction,
      },
      {
        path: "edit-user/:id",
        element: <EditUser />,
        loader: EditUserLoader,
        action: EditUserAction,
      },
      {
        path: "all-users",
        element: <AllUsers />,
        loader: allUsersLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
