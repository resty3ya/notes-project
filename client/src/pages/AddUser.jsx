import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, redirect } from "react-router-dom";
import useAllUsersContext from "./AllUsers";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/users", data);
    toast.success("added user successfull");
    return redirect("/all-users");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddUser = () => {
  const { user } = useAllUsersContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <FormRow type="username" name="username" />
        <FormRow type="text" name="firstName" />
        <FormRow type="text" name="lastName" />
        <FormRow
          type="checkbox"
          name="active"
          checked={user.active ? true : false}
        />
      </Form>
    </Wrapper>
  );
};
export default AddUser;
