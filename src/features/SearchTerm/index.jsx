import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./search.scss";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};
PostFilterForm.defaultPropTypes = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  
  function handleFormFilterChange(e) {
      const value = e.target.value;
      setSearchTerm(value);
      if (!onSubmit) return;
      
      if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
      }

      // DEBOUNCE
      typingTimeoutRef.current = setTimeout(() => {
        const formValue = {
          searchTerm: value,
        };
        onSubmit(formValue);
      }, 500);
    }

  return (
    <form>
      <input
        className="input-search"
        placeholder="Search"
        type="text"
        value={searchTerm}
        onChange={handleFormFilterChange}
      ></input>
    </form>
  );
}

export default PostFilterForm;
