import { FormRow, FormRowSelect } from "../../components";
import { Form, redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await Request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/notes", data);
    console.log(data);
    toast.success("added note successfully");
    return redirect("/all-notes");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddNote = () => {
  return (
    <Form method="post">
      <FormRowSelect labelText="user" name="user" />
      <FormRow type="text" name="title" />
      <FormRow type="text" name="text" />
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </Form>
  );
};
export default AddNote;
