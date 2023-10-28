import customFetch from "../../utils/customFetch";
import { FormRow, FormRowSelect } from "../../components";
import { useLoaderData, Form, redirect } from "react-router-dom";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
import { NOTE_STATUS } from "../../../../utils/constant";
import { useState } from "react";

export const loader = async ({ params }) => {
  try {
    // getting the data of notes and user from the server and set it to object
    const [notes, user] = await Promise.all([
      customFetch.get(`/notes/${params.id}`),
      customFetch.get(`/users`),
    ]);
    return { user, notes };

    // const { data } = await customFetch.get(`/notes/${params.id}`);

    // // console.log({ data });
    // return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/all-notes");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/notes/${params.id}`, data);
    toast.success("Notes successfully updated!");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditNote = () => {
  const { notes, user } = useLoaderData();

  //destructure
  const { data: notesData } = notes;
  const { data: usersData } = user;

  //destructuring and getting the specific data
  const usersDataForMapping = usersData.user;
  const notesDataForMapping = notesData.note;

  const [selectNotesUser, setSelectNotesUser] = useState(
    notesDataForMapping.user
  );

  // const defaultUserValue  =>
  //   usersDataForMapping._id === notesDataForMapping.user;

  // console.log(defaultUserValue);

  const onUserChanged = () => setSelectNotesUser((prev) => !prev);

  const options = usersDataForMapping
    .filter((user) => user.active === true)
    .map((user) => {
      return (
        <option key={user._id} value={user._id}>
          {user.username}
        </option>
      );
    });

  return (
    <Wrapper>
      <Form method="post" className="form">
        {/* <label htmlFor="user">Select User:</label>
        <select
          id="user"
          name="user"
          className="btn btn-block"
          value={selectNotesUser}
          defaultValue={notesDataForMapping.user}
          onChange={(e) => setSelectNotesUser(e.target.value)}
        >
          {options}
        </select> */}
        <select
          name="user"
          className="form-select"
          defaultValue={selectNotesUser}
          onChange={onUserChanged}
        >
          {options}
        </select>
        <FormRow
          type="text"
          name="title"
          defaultValue={notesDataForMapping.title}
        />
        <FormRow
          type="text"
          name="text"
          defaultValue={notesDataForMapping.text}
        />
        <FormRowSelect
          labelText="note status"
          name="noteStatus"
          defaultValue={notesDataForMapping.noteStatus}
          list={Object.values(NOTE_STATUS)}
        />
        <button type="submit">submit</button>
      </Form>
    </Wrapper>
  );
};
export default EditNote;
