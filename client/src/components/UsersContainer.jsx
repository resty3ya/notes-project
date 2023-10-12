import { useAllUsersContext } from "../pages/AllUsers";

const UsersContainer = () => {
  const { data } = useAllUsersContext();

  //destructure
  const { user } = data;

  return (
    <div>
      <label>username</label>
      {user.map((user) => {
        return (
          <>
            <div key={user._id}>
              <p>{user.username}</p>,<p>{user.firstName}</p>,
              <p>{user.lastName}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default UsersContainer;
