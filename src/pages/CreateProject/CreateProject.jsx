import React, { useEffect, useState } from "react";
import { Typography } from "../../components/shared/Typography";
import { useServices } from "../../context/ServiceContext";
import { useApi } from "../../context/ApiContext";
import { Loading } from "../../components/shared/Loading";
import { InputField } from "../../components/shared/InputField";
import styles from "./CreateProject.module.scss";
import { Button } from "../../components/shared/Button";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();
  const { loading } = useApi();
  const { services, getServices } = useServices();
  const [credentials, setCredentials] = useState({ name: "" });

  useEffect(() => {
    getServices();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const cancel = () => navigate("/")

  if (loading) {
    return (
      <div className={styles.root}>
        <div className={styles.loading}>
          <Loading isDark />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.root}>
      <Typography
        className={styles.title}
        text="Create Project"
        type="display"
        size="sm"
      />
      <hr />
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
    </div>
  );
};

export default CreateProject;
