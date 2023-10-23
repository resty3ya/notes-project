import Wrapper from "../assets/wrappers/Job";
import { FormRow } from "./index";
import { Link } from "react-router-dom";

const User = ({ _id, username, firstName, lastName, active }) => {
  return (
    <Wrapper>
      <header>
        <div className="info">
          <label>Username</label>
          <h3>{username}</h3>
        </div>
      </header>
      <div className="content">
        <label>First Name:</label>
        <h5>{firstName}</h5>
        <label>Last Name:</label>
        <h5>{lastName}</h5>
        <label>Active</label>
        <input type="checkbox" checked={active} disabled />
        <Link to={`../edit-user/${_id}`} className="btn edit-btn">
          Edit
        </Link>
      </div>
    </Wrapper>
  );
};

export default User;
