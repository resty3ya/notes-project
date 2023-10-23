import { useAllUsersContext } from "../pages/User/AllUsers";
import User from "./User";
import Wrapper from "../assets/wrappers/JobsContainer";

const UsersContainer = () => {
  const { data } = useAllUsersContext();

  //destructure
  const { user } = data;
  console.log({ user });
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
