import Wrapper from "../assets/wrappers/Job";
import { Link, Form } from "react-router-dom";

const Notes = ({ _id, user, title, text, noteStatus }) => {
  return (
    <Wrapper>
      <header>
        <div className="info">
          <label>Title:</label>
          <h2>{title}</h2>
        </div>
      </header>
      <div className="content">
        <label>user:</label>
        <h4>{user.username}</h4>
        <label>text:</label>
        <h3>{text}</h3>
        <label>Status:</label>
        <p>{noteStatus}</p>
        <Link to={`../edit-note/${_id}`} className="btn edit-btn">
          Edit
        </Link>
        <Form method="post" action={`../delete-note/${_id}`}>
          <button type="submit" className="btn delete-btn">
            Delete
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};
export default Notes;
