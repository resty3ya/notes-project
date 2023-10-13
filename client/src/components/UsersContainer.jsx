import { useAllUsersContext } from "../pages/AllUsers";
import Wrapper from "../assets/wrappers/JobsContainer";
import User from "./User";

const UsersContainer = () => {
  const { data } = useAllUsersContext();

  //destructure
  const { user } = data;

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
