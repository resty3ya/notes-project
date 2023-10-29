import Wrapper from "../../assets/wrappers/DashboardFormPage";
import customFetch from "../../utils/customFetch";
import { FormRow, FormRowSelect } from "../../components";
import { NOTE_STATUS } from "../../../../utils/constant";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";

// import { useState } from "react";

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
  const userDataForMapping = usersData.user;

  // const [formState, setFormState] = useState({
  //   user: userDataForMapping[0]._id,
  //   title: "",
  //   text: "",
  //   noteStatus: NOTE_STATUS.PENDING,
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormState({ ...formState, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   setFormState({
  //     user: userDataForMapping[0]._id,
  //     title: "",
  //     text: "",
  //     noteStatus: NOTE_STATUS.PENDING,
  //   });
  // };
  // function refreshPage() {
  //   window.location.reload(false);
  // }

  return (
    <Wrapper>
      <Form method="post" className="form">
        <label htmlFor="user">Select User:</label>
        <select
          id="user"
          name="user"
          className="btn btn-block"
          // value={formState.user}
          // onChange={handleInputChange}
        >
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
        <FormRow
          type="text"
          name="title"
          // value={formState.title}
          // onChange={handleInputChange}
        />
        <FormRow
          type="text"
          name="text"
          // value={formState.text}
          // onChange={handleInputChange}
        />
        <FormRowSelect
          labelText="note status"
          name="noteStatus"
          defaultValue={userDataForMapping.noteStatus}
          // onChange={handleInputChange}
          list={Object.values(NOTE_STATUS)}
        />
        <button type="submit">submit</button>
      </Form>
    </Wrapper>
  );
};
export default CreateNote;
