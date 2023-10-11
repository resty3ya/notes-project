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

// import { action as addNoteAction } from "./pages/AddNote";
// import { loader as allNotesLoader } from "./pages/AllNotes";
import { loader as allUsersLoader } from "./pages/AllUsers";

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
