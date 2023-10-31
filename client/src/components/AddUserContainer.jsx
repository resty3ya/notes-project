import Wrapper from "../assets/wrappers/JobsContainer";
import CreateUser from "../pages/User/CreateUser";

const AddUserContainer = () => {
  return (
    <Wrapper>
      <div className="jobs">
        <CreateUser />
      </div>
    </Wrapper>
  );
};
export default AddUserContainer;
