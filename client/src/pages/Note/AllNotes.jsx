import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { useContext, createContext } from "react";
import NotesContainer from "../../components/NotesContainer";
import { useLoaderData } from "react-router-dom";
import { AddNoteContainer } from "../../components";

export const loader = async () => {
  try {
    const [notes, user] = await Promise.all([
      customFetch.get("/notes"),
      customFetch.get("/users"),
    ]);

    // const { userData } = await customFetch.get("/users");
    // console.log(data1.data, data2.data);
    return { notes, user };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllNotesContext = createContext();
const AllNotes = () => {
  const { notes, user } = useLoaderData();

  // console.log("THIS IS FROM ALL NOTES", notes);
  // console.log("THIS IS FROM ALL NOTES", user);
  //

  return (
    <AllNotesContext.Provider value={{ notes, user }}>
      <AddNoteContainer />
      <NotesContainer />
    </AllNotesContext.Provider>
  );
};
export const useAllNotesContext = () => useContext(AllNotesContext);
export default AllNotes;
