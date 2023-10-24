import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { useContext, createContext } from "react";
import NotesContainer from "../../components/NotesContainer";
import { useLoaderData } from "react-router-dom";

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

  const getUserName = (notes) => {
    const author = user.find((user) => user._id === notes.user);
    return author ? user.username : "unknown";
  };

  //destructure
  //yung DATA na value ay yung nasa loob ng Object na finetch mo from loader
  const { data } = notes;
  const { data: userInfo } = user;

  return (
    <AllNotesContext.Provider value={{ data, userInfo }}>
      <NotesContainer />
    </AllNotesContext.Provider>
  );
};
export const useAllNotesContext = () => useContext(AllNotesContext);
export default AllNotes;
