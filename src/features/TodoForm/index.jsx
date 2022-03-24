import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./formStyle.scss";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultPropTypes = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit} = props;
  const [value, setValue] = useState("");

  function handleChangeValue(e) {
    setValue(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const formValue = {
      title: value,
    };
    onSubmit(formValue);
    setValue("");
  }

  return (
    <div>
      <form className="form" onSubmit={handleOnSubmit}>
        <input
          placeholder="New todo"
          type="text"
          value={value}
          onChange={handleChangeValue}
        />
      </form>
    </div>
  );
}

export default TodoForm;
