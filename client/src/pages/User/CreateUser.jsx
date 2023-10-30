import Wrapper from "../../assets/wrappers/DashboardFormPage";
import customFetch from "../../utils/customFetch";
import { FormRow } from "../../components";
import { toast } from "react-toastify";
import { Form, redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post("/users", data);
    toast.success("Added user successfully!");
    return redirect("/all-users");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const CreateUser = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <FormRow type="username" name="username" />
        <FormRow type="text" name="firstName" />
        <FormRow type="text" name="lastName" />
        <br />
        <button type="submit">SUBMIT</button>
      </Form>
    </Wrapper>
  );
};
export default CreateUser;
