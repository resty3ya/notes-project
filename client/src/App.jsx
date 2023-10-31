import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomeLayout,
  AllNotes,
  CreateNote,
  AllUsers,
  CreateUser,
  EditNote,
  DeleteNote,
  EditUser,
  DeleteUser,
  Error,
} from "./pages";

import { action as createUserAction } from "./pages/User/CreateUser";
import { loader as allNotesLoader } from "./pages/Note/AllNotes";
import { loader as allUsersLoader } from "./pages/User/AllUsers";
import { loader as editUserLoader } from "./pages/User/EditUser";
import { action as editUserAction } from "./pages/User/EditUser";
import { action as deleteUserAction } from "./pages/User/DeleteUser";
import { loader as editNoteLoader } from "./pages/Note/EditNote";
import { action as editNoteAction } from "./pages/Note/EditNote";
import { action as deleteNoteAction } from "./pages/Note/DeleteNote";
import { action as createNoteAction } from "./pages/Note/CreateNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: "true",
        element: <AllNotes />,
        loader: allNotesLoader,
        children: [
          {
            index: "true",
            element: <CreateNote />,
            action: createNoteAction,
          },
        ],
      },
      {
        path: "all-users",
        element: <AllUsers />,
        loader: allUsersLoader,
        children: [
          {
            // I'm getting ERROR here, actually no error hindi lang mag route sa all-users if i use index:"/" that is why
            // I use this path with the following /all-users/
            path: "/all-users/",
            element: <CreateUser />,
            action: createUserAction,
          },
        ],
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
