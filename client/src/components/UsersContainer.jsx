import { useAllUsersContext } from "../pages/AllUsers";

const UsersContainer = () => {
  const { data } = useAllUsersContext();

  //destructure
  const { user } = data;

  return (
    <div>
      {user.map((user) => {
        return (
          <div key={user._id}>
            <label>username</label>
            <p>{user.username}</p>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
          </div>
        );
      })}
    </div>
  );
};
export default UsersContainer;
