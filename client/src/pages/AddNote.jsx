import FormRow from "../components/FormRow";

const AddNote = () => {
  return (
    <div>
      <FormRow type="text" name="title" />
      <FormRow type="text" name="text" />
    </div>
  );
};
export default AddNote;
