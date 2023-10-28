import { useState } from "react";

const FormRowCheckbox = ({ user, labelText, name }) => {
  const { active } = user;

  let [isChecked, setIsChecked] = useState(active);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="form-row">
      <label htmlFor={name}>{labelText}</label>
      <input
        className="form-input"
        type="checkbox"
        name="active"
        value={isChecked}
        onChange={handleCheck}
      />
    </div>
  );
};
export default FormRowCheckbox;
