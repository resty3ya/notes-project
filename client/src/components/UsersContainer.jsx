import { useAllUsersContext } from "../pages/AllUsers";

const UsersContainer = () => {
  const { data } = useAllUsersContext();

  //destructure
  const { user, username, firstName, lastName } = data;
  console.log(data);

  return (
    <div>
      {user.map((user) => {
        return <div key={user._id}></div>;
      })}
    </div>
  );
};
export default UsersContainer;
