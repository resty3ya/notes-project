import Wrapper from "../assets/wrappers/Job";
import { FormRow } from "./index";
import { Link } from "react-router-dom";

const User = ({ _id, username, firstName, lastName, active }) => {
  return (
    <Wrapper>
      <header>
        <div className="info">
          <h5>{username}</h5>
        </div>
      </header>
      <div className="content">
        <p>
          Firstname:
          {firstName}
          <br />
          Lastname:
          {lastName}
          <br />
          <FormRow
            type="checkbox"
            name="active"
            id="active"
            checked={active ? true : false}
          />
        </p>
        <Link to={`../edit-user/${_id}`} className="btn edit-btn">
          Edit
        </Link>
      </div>
    </Wrapper>
  );
};

export default User;
