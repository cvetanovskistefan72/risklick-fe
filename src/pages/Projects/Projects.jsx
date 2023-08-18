import React from "react";
import styles from "./Projects.module.scss";
import { Typography } from "../../components/shared/Typography";

const Projects = () => {
  return (
    <div className={styles.root}>
      <Typography className={styles.title} text="Projects" type="display" size="sm" />
    </div>
  );
};

export default Projects;
