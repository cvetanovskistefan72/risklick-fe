import React from "react";
import styles from "./ProjectList.module.scss";
import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectList = ({ projects }) => {
  return (
    <div className={styles.root}>
      {projects?.map((project) => (
        <ProjectItem key={project.id} project={project}></ProjectItem>
      ))}
    </div>
  );
};

export default ProjectList;
