import customFetch from "../utils/customFetch";
import { FormRow } from "../components";
import { useLoaderData, Form, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/users/${params.id}`);
    console.log(data);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/all-users");
  }
};

const EditUser = () => {
  const { user } = useLoaderData();

  console.log(user.username);

  return <div>EditUser</div>;
};
export default EditUser;
