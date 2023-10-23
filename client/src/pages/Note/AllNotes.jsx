import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import NotesContainer from "../../components/NotesContainer";

export const loader = async () => {
  try {
    const [data1, data2] = await Promise.all([
      customFetch.get("/notes"),
      customFetch.get("/users"),
    ]);
    // const { userData } = await customFetch.get("/users");
    // console.log(data1.data, data2.data);
    return { data1, data2 };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllNotesContext = createContext();
const AllNotes = () => {
  const { data1 } = useLoaderData();
  const { data2 } = useLoaderData();

  return (
    <AllNotesContext.Provider value={{ data1, data2 }}>
      <NotesContainer />
    </AllNotesContext.Provider>
  );
};
export const useAllNotesContext = () => useContext(AllNotesContext);
export default AllNotes;
