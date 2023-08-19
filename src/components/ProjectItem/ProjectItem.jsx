import React from "react";
import { toast } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
import { Typography } from "../shared/Typography";
import { Icon } from "../shared/Icon";
import formatDate from "../../helpers/formatDate";
import styles from "./ProjectItem.module.scss";
import isOlderThanTwoMonths from "../../helpers/isOlderThanTwoMonths";

const ProjectItem = ({ project }) => {
  const isMobilePortrait = useMediaQuery({
    query: "(max-width: 767px) and (orientation: portrait)",
  });
  const isMobileLandscape = useMediaQuery({
    query: "(max-width: 1024px) and (orientation: landscape)",
  });

  const copyLink = () => {
    navigator.clipboard.writeText(project.share_url);
    toast.success(`Link copied!`);
  };

  if (
    (isMobilePortrait || isMobileLandscape) &&
    isOlderThanTwoMonths(project?.created_at)
  )
    return null;
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
          text={`Created: ${formatDate(project?.created_at)}`}
        />
      </div>
    </div>
  );
};

export default ProjectItem;
