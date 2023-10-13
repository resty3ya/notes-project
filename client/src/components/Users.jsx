import Wrapper from "../assets/wrappers/Job";

const Users = ({ _id, username, firstName, lastName, active }) => {
  return (
    <Wrapper>
      <header>
        <div className="info">
          <h5>username: {username}</h5>
          <p>
            <h6>Firstname:</h6> {firstName} <h6>Lastname:</h6> {lastName}
          </p>
        </div>
      </header>
    </Wrapper>
  );
};

export default Users;
