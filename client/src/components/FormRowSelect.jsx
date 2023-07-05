import PropTypes from "prop-types";

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="form-row">
      <label
        htmlFor={name}
        className="form-label"
      >
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((itemValue, index) => {
          return (
            <option
              key={index}
              value={itemValue}
            >
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

FormRowSelect.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  list: PropTypes.array,
};

export default FormRowSelect;
