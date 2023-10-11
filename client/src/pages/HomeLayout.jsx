import Wrapper from "../assets/wrappers/Dashboard";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const HomeLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <Navbar />
        <div className="dashboard-page">
          <Outlet />
        </div>
      </main>
    </Wrapper>
  );
};

export default HomeLayout;
