import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path } = link;

        return (
          <div>
            <NavLink to={path} key={text} className="nav-link" end>
              {text}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};
export default NavLinks;
