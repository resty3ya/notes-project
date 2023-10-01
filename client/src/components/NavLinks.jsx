import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ text, path }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path } = link;

        return (
          <NavLink to={path} key={text} className="nav-link" end>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
