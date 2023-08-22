import React, { useEffect } from "react";
import { CreateProjectForm } from "../../components/CreateProjectForm";
import { Loading } from "../../components/shared/Loading";
import { Typography } from "../../components/shared/Typography";
import { useLoading } from "../../context/LoadingContext";
import { useServices } from "../../context/ServiceContext";
import styles from "./CreateProject.module.scss";

const CreateProject = () => {
  const { services, getServices } = useServices();
  const { loading } = useLoading();

  useEffect(() => {
    getServices();
  }, []);

  if (loading && !services) {
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
      <CreateProjectForm services={services} />
    </div>
  );
};

export default CreateProject;
