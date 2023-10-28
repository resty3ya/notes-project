import Wrapper from "../assets/wrappers/Job";
import { useNavigate, Form } from "react-router-dom";

const User = ({ _id, username, firstName, lastName, active }) => {
  const navigate = useNavigate();

  const handleEdit = () => navigate(`../edit-user/${_id}`);

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
        <label>Status:</label>
        <input type="checkbox" checked={active} disabled />
        {active === true ? "Active" : "Inactive"}
        <button onClick={handleEdit} className="btn edit-btn">
          Edit
        </button>
        {/* <Form method="post" action={`../delete-user/${_id}`}>
          <button type="submit" className="btn delete-btn" disabled>
            Delete
          </button>
        </Form> */}
      </div>
    </Wrapper>
  );
};

export default User;
