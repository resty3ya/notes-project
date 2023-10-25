import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  AddUser,
  AddNote,
  AllNotes,
  AllUsers,
  EditNote,
  DeleteNote,
  EditUser,
  DeleteUser,
  Error,
} from "./pages";

// import { action as addNoteAction } from "./pages/AddNote";
import { loader as allNotesLoader } from "./pages/Note/AllNotes";
import { loader as allUsersLoader } from "./pages/User/AllUsers";
import { action as addUserAction } from "./pages/User/AddUser";
import { loader as editUserLoader } from "./pages/User/EditUser";
import { action as editUserAction } from "./pages/User/EditUser";
import { action as deleteUserAction } from "./pages/User/DeleteUser";
import { action as addNoteAction } from "./pages/Note/AddNote";
import { loader as addNoteLoader } from "./pages/Note/AddNote";
import { loader as editNoteLoader } from "./pages/Note/EditNote";
import { action as editNoteAction } from "./pages/Note/EditNote";
import { action as deleteNoteAction } from "./pages/Note/DeleteNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AddNote />,
        action: addNoteAction,
        loader: addNoteLoader,
      },
      {
        path: "all-notes",
        element: <AllNotes />,
        loader: allNotesLoader,
      },
      {
        path: "edit-note/:id",
        element: <EditNote />,
        loader: editNoteLoader,
        action: editNoteAction,
      },
      {
        path: "delete-note/:id",
        element: <DeleteNote />,
        action: deleteNoteAction,
      },
      {
        path: "add-user",
        element: <AddUser />,
        action: addUserAction,
      },
      {
        path: "edit-user/:id",
        element: <EditUser />,
        loader: editUserLoader,
        action: editUserAction,
      },
      {
        path: "delete-user/:id",
        element: <DeleteUser />,
        action: deleteUserAction,
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
