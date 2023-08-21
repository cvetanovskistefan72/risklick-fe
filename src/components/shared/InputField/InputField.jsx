import React from "react";
import styles from "./InputField.module.scss";
import { Typography } from "../Typography";
import { Icon } from "../Icon";
const InputField = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  disabled,
  style,
  icon,
  iconName,
  iconSize,
  iconClass,
  className,
}) => (
  <div className={className}>
    {label && (
      <label className={styles.label}>
        <Typography text={label} size="sm" />
      </label>
    )}
    <div className={styles.group}>
      <input
        disabled={disabled}
        type={type}
        value={value}
        name={name}
        className={`${styles.input} ${!icon && styles.inputNoIcon}`}
        placeholder={placeholder}
        onChange={onChange}
        style={style}
      />
      {icon && (
        <Icon
          name={iconName}
          size={iconSize}
          className={`${styles.icon} ${iconClass}`}
        />
      )}
    </div>
  </div>
);

export default InputField;
