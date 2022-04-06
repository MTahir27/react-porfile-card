import React from "react";
import "./style.css";

const TextAreaField = ({ label, ...otherTextAreaProps }) => {
  return (
    <div>
      {label && <label htmlFor={otherTextAreaProps.id}>{label}</label>}
      <textarea rows="5" {...otherTextAreaProps}></textarea>
    </div>
  );
};

export default TextAreaField;
