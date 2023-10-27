import { useState } from "react";

const FormRowCheckbox = ({ user }) => {
  let [active, setActive] = useState(user.active);

  return (
    <>
      <label htmlFor="active">
        <input
          type="checkbox"
          name="active"
          value={active}
          onChange={() => {
            setActive((active) => !active);
          }}
        />
      </label>
    </>
  );
};
export default FormRowCheckbox;
