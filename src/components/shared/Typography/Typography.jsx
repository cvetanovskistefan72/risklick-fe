import React from "react";
import styles from "./Typography.module.scss";

const Typography = ({
  size = "md",
  weight = "regular",
  type = "text",
  text,
  className,
  style,
}) => {
  return (
    <div
      style={style}
      className={`${styles[type]} ${styles[size]} ${styles[weight]} ${className}`}
    >
      {text}
    </div>
  );
};

export default Typography;
