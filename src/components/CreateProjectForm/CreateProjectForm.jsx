import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import { useProjects } from "../../context/ProjectsContext";
import { Button } from "../shared/Button";
import { InputField } from "../shared/InputField";
import { Loading } from "../shared/Loading";
import { SelectField } from "../shared/SelectField";
import styles from "./CreateProjectForm.module.scss";

const CreateProjectForm = ({ services }) => {
  const { addProject } = useProjects();
  const [credentials, setCredentials] = useState({ name: "", service: null });
  const navigate = useNavigate();
  const { loading } = useLoading();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      ...credentials,
      service_id: credentials?.service?.value || "",
    };
    delete body.service;
    addProject(body);
  };

  const handleChangeInput = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeSelect = (value, { name }) => {
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const cancel = () => navigate("/");

  const modifiedServices = services?.map((s) => ({
    value: s.id,
    label: s.name,
  }));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        type="name"
        label="Name"
        name="name"
        className={styles.name}
        placeholder="Enter name"
        value={credentials.name}
        onChange={handleChangeInput}
      />
      <SelectField
        name="service"
        label="Services"
        placeholder="Select Service"
        className={styles.services}
        value={credentials.service}
        onChange={handleChangeSelect}
        options={modifiedServices || []}
      />
      {loading && (
        <div className={styles.loading}>
          <Loading isDark />
        </div>
      )}
      {!loading && (
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
      )}
    </form>
  );
};

export default CreateProjectForm;
