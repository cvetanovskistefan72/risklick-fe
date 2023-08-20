import React, { useEffect } from "react";
import { Typography } from "../../components/shared/Typography";
import { useServices } from "../../context/ServiceContext";
import { Loading } from "../../components/shared/Loading";
import { useLoading } from "../../context/LoadingContext";
import styles from "./CreateProject.module.scss";
import { CreateProjectForm } from "../../components/CreateProjectForm";

const CreateProject = () => {
  const { services, getServices } = useServices();
  const { loading } = useLoading();

  useEffect(() => {
    getServices();
  }, []);

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
      {services && <CreateProjectForm services={services} />}
    </div>
  );
};

export default CreateProject;
