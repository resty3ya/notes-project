import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  AddUser,
  AddNote,
  AllNotes,
  AllUsers,
  EditNote,
  EditUser,
  DeleteUser,
  Error,
} from "./pages";

// import { action as addNoteAction } from "./pages/AddNote";
import { loader as allNotesLoader } from "./pages/Note/AllNotes";
import { loader as allUsersLoader } from "./pages/User/AllUsers";
import { action as AddUserAction } from "./pages/User/AddUser";
import { loader as EditUserLoader } from "./pages/User/EditUser";
import { action as EditUserAction } from "./pages/User/EditUser";
import { action as DeleteUserAction } from "./pages/User/DeleteUser";
import { action as addNoteAction } from "./pages/Note/AddNote";
import { loader as addNoteLoader } from "./pages/Note/AddNote";

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
        path: "delete-user/:id",
        element: <DeleteUser />,
        action: DeleteUserAction,
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
