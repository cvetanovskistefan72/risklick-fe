import React from "react";
import { Typography } from "../shared/Typography";
import { Icon } from "../shared/Icon";
import styles from "./ProjectItem.module.scss";
import { toast } from "react-hot-toast";

const ProjectItem = ({ project }) => {
  const copyLink = () => {
    navigator.clipboard.writeText(project.share_url);
    toast.success(`Link copied!`);
  };
  return (
    <div
      className={`${styles.root} ${project?.is_owner ? styles.isOwner : ""}`}
    >
      <div className={styles.title}>
        <Typography type="text" size="lg" text={project?.name} />
      </div>
      <div className={styles.link}>
        <Icon onClick={copyLink} name="share" size="large" />
      </div>
      <div className={styles.date}>
        <Typography
          type="text"
          size="sm"
          text={`Created: ${project?.created_at.split("T")[0]}`}
        />
      </div>
    </div>
  );
};

export default ProjectItem;
