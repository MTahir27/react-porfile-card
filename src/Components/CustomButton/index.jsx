import React from "react";
import "./style.css";
import emailIcon from "../../Assets/Images/Icons/Mail.svg";
import linkdinIcon from "../../Assets/Images/Icons/Linkedin.svg";

const CustomButton = ({ title, ...otherButtonProps }) => {
  return (
    <>
      {title && (
        <button
          className={title === "email" ? "whiteBtn" : `blueBtn`}
          {...otherButtonProps}
        >
          <span className="imgIcon">
            <img
              src={title === "email" ? emailIcon : linkdinIcon}
              alt={`${title} Icon`}
            />
          </span>
          <span>{title}</span>
        </button>
      )}
    </>
  );
};

export default CustomButton;
