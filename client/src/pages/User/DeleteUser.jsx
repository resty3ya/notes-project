import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/users/${params.id}`);
    toast.success("User successfully deleted");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("/all-users");
};

const DeleteUser = () => {
  return <div>DeleteUser</div>;
};
export default DeleteUser;
