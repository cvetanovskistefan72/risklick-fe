import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../shared/Button";
import { Typography } from "../shared/Typography";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();
  const handleRedirect = () => navigate("/");
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Typography className={styles.notFound} text="404" type="display" />
        <Typography
          className={styles.text}
          text="Page does not exist"
          size="md"
        />
        <Button
          buttonType="primary"
          text="Back to Home page"
          size="medium"
          onClick={handleRedirect}
        />
      </div>
    </div>
  );
};

export default NotFound;
