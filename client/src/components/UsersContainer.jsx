import { useAllUsersContext } from "../pages/User/AllUsers";
import User from "./User";
import Wrapper from "../assets/wrappers/JobsContainer";

const UsersContainer = () => {
  const { user } = useAllUsersContext();

  return (
    <Wrapper>
      <div className="jobs">
        {user.map((user) => {
          return <User key={user._id} {...user} />;
        })}
      </div>
    </Wrapper>
  );
};
export default UsersContainer;
