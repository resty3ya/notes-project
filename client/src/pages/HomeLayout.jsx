import Wrapper from "../assets/wrappers/Dashboard";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { Navbar } from "../components";
import customFetch from "../utils/customFetch";
import { createContext, useContext } from "react";

export const loader = async () => {
  try {
    const { user } = await customFetch.get("/api/users");
    return { user };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const HomeLayoutContext = createContext();

const HomeLayout = () => {
  return (
    <HomeLayoutContext.Provider>
      <Wrapper>
        <main className="dashboard">
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </main>
      </Wrapper>
    </HomeLayoutContext.Provider>
  );
};

export const useHomeLayoutContext = () => useContext(HomeLayoutContext);

export default HomeLayout;
