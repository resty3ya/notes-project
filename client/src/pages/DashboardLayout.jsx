import Wrapper from "../assets/wrappers/Dashboard";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const DashboardLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
    </Wrapper>
  );
};
export default DashboardLayout;
