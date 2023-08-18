import React from "react";
import styles from "./Icon.module.scss";
import icons from "./icons";

const Icon = ({ name, size, width, height, className, onClick }) => {
  return (
    <svg
      className={`${styles[`icon-${name}`]} ${styles[size]} ${className}`}
      aria-hidden="true"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      onClick={onClick}
    >
      {icons[name]}
    </svg>
  );
};

export default Icon;
