import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  type = "primary",
  text,
  size = "medium",
  width,
  height,
  disabled,
  className,
  onClick,
}) => {
  let buttonClassName;

  switch (type) {
    case "primary":
      buttonClassName = styles["button-primary"];
      break;
    case "secondary":
      buttonClassName = styles["button-secondary"];
      break;
    default:
      buttonClassName = "";
  }

  return (
    <button
      disabled={disabled}
      className={`${buttonClassName} ${styles[size]} ${className}`}
      style={{ width, height }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
