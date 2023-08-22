import React, { useState } from "react";
import Select from "react-select";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import styles from "./SelectField.module.scss";

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
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  options = options.map((o) => {
    return {
      value: o.value,
      label: (
        <div className={styles.option}>
          <span>{o.label}</span>
          {o.value === value?.value && menuIsOpen && (
            <Icon name="check" size="sm" />
          )}
        </div>
      ),
    };
  });

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
        styles={{
          control: (baseStyles, state) => {
            return {
              ...baseStyles,
              borderColor: "#d0d5dd",
              boxShadow: state.isFocused ? "0 0 0 2px #dce1fb" : "none",
              backgroundColor: state.isDisabled ? "#f2f4f7" : "",
              outlineColor: state.isFocused ? "none" : "",
              "&:hover": {
                borderColor: "none",
                color: "#537087",
              },
            };
          },
          singleValue: (baseStyles, state) => {
            return {
              ...baseStyles,
              color: "#537087",
            };
          },
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isDisabled ? "#d0d5dd" : "#537087",
          }),
          menuList: (baseStyles) => ({
            ...baseStyles,
            color: "#1a2631",
          }),

          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "#f2f4f7" : "",
            backgroundColor: state.isSelected ? "#f2f4f7" : "",
            color: "#1a2631",
            "&:hover": {
              backgroundColor: "#f2f4f7",
            },
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: state.isDisabled ? "#d0d5dd" : "#537087",
            "&:hover": {
              color: "#537087",
            },
          }),
          indicatorSeparator: () => ({
            display: "none",
          }),
        }}
        className={styles.select}
        options={options}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
      />
    </div>
  );
};

export default SelectField;
