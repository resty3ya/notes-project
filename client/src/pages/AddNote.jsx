import { FormRow, FormRowSelect } from "../components";
import { Form } from "react-router-dom";

export const action = async (data) => {
  console.log(data);
  return null;
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
