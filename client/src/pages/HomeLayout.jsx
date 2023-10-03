import Wrapper from "../assets/wrappers/Dashboard";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { createContext, useContext } from "react";

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
