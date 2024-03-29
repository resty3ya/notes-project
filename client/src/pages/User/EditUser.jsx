import customFetch from "../../utils/customFetch";
import { FormRow, FormRowSelect, FormRowCheckbox } from "../../components";
import { useLoaderData, Form, redirect } from "react-router-dom";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/users/${params.id}`);
    console.log("THIS IS FROM LOADER", data);
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/all-users");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("this is from form ", formData, data, params);
  try {
    await customFetch.patch(`/users/${params.id}`, data);
    toast.success("User successfully updated");
    return redirect("/all-users");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditUser = () => {
  const { data } = useLoaderData();

  //destructure
  const { user } = data;

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Edit User</h4>
        <div className="form-center">
          <FormRow type="text" name="username" defaultValue={user.username} />
          <FormRow type="text" name="firstName" defaultValue={user.firstName} />
          <FormRow type="text" name="lastName" defaultValue={user.lastName} />
          {/* Pag Checkbox pala laging magkapartner ang name & value or defaultValue attribute to have the value ref: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value  */}
          <FormRowCheckbox user={user} labelText="Status:" />
          <p>{!user.active ? "Active" : "Inactive"}</p>
        </div>
        <button type="submit">SUBMIT</button>
      </Form>
    </Wrapper>
  );
};
export default EditUser;
