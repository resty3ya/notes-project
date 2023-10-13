import Wrapper from "../assets/wrappers/Job";

const User = ({ username, firstName, lastName, active }) => {
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
          <label>Active</label>
          <input
            type="checkbox"
            name="active"
            id="active"
            checked={active ? true : false}
          />
        </p>
      </div>
    </Wrapper>
  );
};

export default User;
