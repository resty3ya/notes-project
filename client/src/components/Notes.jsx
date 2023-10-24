import Wrapper from "../assets/wrappers/Job";
import { Link, Form } from "react-router-dom";

const Notes = ({ _id, user: userId, text, title }) => {
  return (
    <Wrapper>
      <header>
        <div className="info">
          <label>Title:</label>
          <h5>{title}</h5>
        </div>
      </header>
      <div className="content">
        <label>user:</label>
        <h6>{userId}</h6>
        <label>text:</label>
        <h6>{text}</h6>
      </div>
    </Wrapper>
  );
};
export default Notes;
