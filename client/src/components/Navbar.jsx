import Wrapper from "../assets/wrappers/Navbar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <NavLinks />
      </div>
    </Wrapper>
  );
};
export default Navbar;
