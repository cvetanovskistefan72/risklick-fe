import React from "react";
import Select from "react-select";
import styles from "./SelectField.module.scss";
import { Typography } from "../Typography";

const SelectField = ({
  value,
  label,
  name,
  placeholder,
  onChange,
  disabled,
  style,
  icon,
  iconName,
  iconSize,
  iconClass,
  className,
  options,
}) => {
  return (
    <div className={className}>
      {label && (
        <label className={styles.label}>
          <Typography text={label} size="sm" />
        </label>
      )}
      <Select
        name={name}
        isDisabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        className={styles.select}
        options={options}
      />
    </div>
  );
};

export default SelectField;
