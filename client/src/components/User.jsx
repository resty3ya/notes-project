import Wrapper from "../assets/wrappers/Job";

const User = ({ _id, username, firstName, lastName }) => {
  return (
    <Wrapper>
      <header>
        <div className="info">
          <h5>{username}</h5>
        </div>
      </header>
      <div className="content">
        <p>
          <emp>Firstname:</emp>
          {firstName} <emp>Lastname:</emp> {lastName}
        </p>
      </div>
    </Wrapper>
  );
};

export default User;
