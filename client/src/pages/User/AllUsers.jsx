import { toast } from "react-toastify";
import { UsersContainer } from "../../components";
import customFetch from "../../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllUsersContext = createContext();

const AllUsers = () => {
  const { data } = useLoaderData();

  // destructure
  const { user } = data;

  return (
    <AllUsersContext.Provider value={{ user }}>
      <UsersContainer />
    </AllUsersContext.Provider>
  );
};

export const useAllUsersContext = () => useContext(AllUsersContext);
export default AllUsers;
