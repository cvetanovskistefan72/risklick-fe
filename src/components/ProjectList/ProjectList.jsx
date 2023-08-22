import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import styles from "./ProjectList.module.scss";

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
