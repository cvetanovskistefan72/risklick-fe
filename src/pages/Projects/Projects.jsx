import React, { useEffect } from "react";
import { useApi } from "../../context/ApiContext";
import { useProjects } from "../../context/ProjectsContext";
import { Typography } from "../../components/shared/Typography";
import { Loading } from "../../components/shared/Loading";
import styles from "./Projects.module.scss";
import { ProjectList } from "../../components/ProjectList";

const Projects = () => {
  const { projects, getProjects } = useProjects();
  const { loading } = useApi();

  useEffect(() => {
    getProjects();
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
        text="Projects"
        type="display"
        size="sm"
      />
      <hr />
      {projects && <ProjectList projects={projects} />}
    </div>
  );
};

export default Projects;
