import { FormRow, FormRowSelect } from "../../components";
import { Form, redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { NOTE_STATUS } from "../../../../utils/constant";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { useAllNotesContext } from "./AllNotes";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/notes", data);
    toast.success("added note successfully");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users");
    console.log({ data });
    return { data };
  } catch (error) {
    return error;
  }
};

//NOTE: USER WITH INACTIVE STATUS MUST NOT SHOW IN SELECT USER
// NOTE: REMOVE DELETE FUNCTION TO THE USERS SO THAT THE NOTE WILL NOT BE DISTORTED

const AddNote = () => {
  const { data } = useLoaderData();

  const { user } = data;

  return (
    <Wrapper>
      <Form method="post" className="form">
        <label htmlFor="user">Select User:</label>
        <select id="user" name="user" className="btn btn-block">
          {/* ADDING OF FILTER TO REMOVE THE INACTIVE STATUS USER */}
          {user
            .filter((user) => user.active === true)
            .map((user) => {
              return (
                <option key={user._id} value={user._id}>
                  {user.username}
                </option>
              );
            })}
        </select>
        <FormRow type="text" name="title" />
        <FormRow type="text" name="text" />
        <FormRowSelect
          labelText="note status"
          name="noteStatus"
          defaultValue={NOTE_STATUS.PENDING}
          list={Object.values(NOTE_STATUS)}
        />
        <button type="submit">submit</button>
      </Form>
    </Wrapper>
  );
};
export default AddNote;
