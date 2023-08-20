import React, { useState } from "react";
import { InputField } from "../shared/InputField";
import { Button } from "../shared/Button";
import { useNavigate } from "react-router-dom";
import styles from "./CreateProjectForm.module.scss";

const CreateProjectForm = () => {
  const [credentials, setCredentials] = useState({ name: "" });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const cancel = () => navigate("/");

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        type="name"
        label="Name"
        name="name"
        className={styles.name}
        placeholder="Enter name"
        value={credentials.name}
        onChange={handleChange}
        icon
        iconName="text"
        iconSize="small"
        iconClass={styles.nameIcon}
      />
      <div className={styles.buttons}>
        <Button
          buttonType="secondary"
          text="Cancel"
          size="medium"
          onClick={cancel}
        />
        <Button
          buttonType="primary"
          text="Create"
          size="medium"
          type="submit"
        />
      </div>
    </form>
  );
};

export default CreateProjectForm;
