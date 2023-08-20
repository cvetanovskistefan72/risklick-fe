import React, { useEffect } from "react";
import { useProjects } from "../../context/ProjectsContext";
import { Typography } from "../../components/shared/Typography";
import { Loading } from "../../components/shared/Loading";
import styles from "./Projects.module.scss";
import { ProjectList } from "../../components/ProjectList";
import { useLoading } from "../../context/LoadingContext";

const Projects = () => {
  const { projects, getProjects } = useProjects();
  const { loading } = useLoading();
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
      <div className={styles.badges}>
        <div className={styles.info}>
          <div className={styles.badge1}></div>
          <Typography text=" - Your projects" />
        </div>
        <div className={styles.info}>
          <div className={styles.badge2}></div>
          <Typography text=" - Other projects" />
        </div>
      </div>
      {projects && <ProjectList projects={projects} />}
    </div>
  );
};

export default Projects;
