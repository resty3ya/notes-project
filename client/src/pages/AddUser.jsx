import { FormRow } from "../components";

const AddUser = () => {
  return (
    <div>
      <FormRow type="username" name="username" />
      <FormRow type="text" name="firstName" />
      <FormRow type="text" name="lastName" />
    </div>
  );
};
export default AddUser;
