import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { useContext, createContext } from "react";
import NotesContainer from "../../components/NotesContainer";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/notes");

    // const { userData } = await customFetch.get("/users");
    // console.log(data1.data, data2.data);
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllNotesContext = createContext();
const AllNotes = () => {
  const { data } = useLoaderData();

  //destructure
  //

  return (
    <AllNotesContext.Provider value={{ data }}>
      <NotesContainer />
    </AllNotesContext.Provider>
  );
};
export const useAllNotesContext = () => useContext(AllNotesContext);
export default AllNotes;
