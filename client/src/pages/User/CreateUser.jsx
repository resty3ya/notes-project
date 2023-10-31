import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { Form, redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { FormRow } from "../../components";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(formData, { data });
  try {
    await customFetch.post("/users", data);
    toast.success("Added user successfully!");
    return redirect("/all-users");
  } catch (error) {
    console.log(error);
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
        <button type="submit">SUBMIT</button>
      </Form>
    </Wrapper>
  );
};
export default CreateUser;
