import Wrapper from "../../assets/wrappers/DashboardFormPage";
import customFetch from "../../utils/customFetch";
import { FormRow, FormRowSelect } from "../../components";
import { NOTE_STATUS } from "../../../../utils/constant";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/notes", data);
    toast.success("added note successfully!");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
  return redirect("/");
};

const CreateNote = ({ usersData }) => {
  const [name, setName] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [text, setText] = useState(" ");

  const userDataForMapping = usersData.user;

  const handleUserChange = (event) => {
    setName(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    setName(" ");
    setTitle(" ");
    setText(" ");
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <label htmlFor="user">Select User:</label>
        <select id="user" name="user" className="btn btn-block">
          {userDataForMapping
            .filter((user) => user.active === true)
            .map((user) => {
              return (
                <option key={user._id} value={user._id}>
                  {user.username}
                </option>
              );
            })}
        </select>
        <FormRow type="text" name="title" onChange={handleTitleChange} />
        <FormRow type="text" name="text" onChange={handleTextChange} />
        <FormRowSelect
          labelText="note status"
          name="noteStatus"
          defaultValue={NOTE_STATUS.PENDING}
          list={Object.values(NOTE_STATUS)}
        />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </Form>
    </Wrapper>
  );
};
export default CreateNote;
