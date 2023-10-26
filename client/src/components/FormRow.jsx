const FormRow = ({
  type,
  name,
  labelText,
  onChange,
  defaultValue,
  checked,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-input"
        onChange={onChange}
        defaultValue={defaultValue}
        checked={checked}
      />
    </div>
  );
};

export default FormRow;
