import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import NotesContainer from "../components/NotesContainer";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...URL(request.URL).SearchParams.entries(),
  ]);

  console.log(params);

  try {
    const { data } = await customFetch.get("/notes");
    console.log(data);
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllNotesContext = createContext();
const AllNotes = () => {
  const { data } = useLoaderData();

  return (
    <AllNotesContext.Provider value={{ data }}>
      <NotesContainer />
    </AllNotesContext.Provider>
  );
};
export const useAllNotesContext = () => useContext(AllNotesContext);
export default AllNotes;
