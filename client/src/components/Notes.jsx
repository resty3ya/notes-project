import Wrapper from "../assets/wrappers/Job";
import { Link, Form } from "react-router-dom";

const Notes = ({ user, title, text }) => {
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
      </div>
    </Wrapper>
  );
};
export default Notes;
