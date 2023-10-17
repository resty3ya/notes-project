const FormRow = ({ type, name, labelText, onChange, checked }) => {
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
        required
        checked={checked}
        // need to work with the checked readOnly later
      />
    </div>
  );
};

export default FormRow;
