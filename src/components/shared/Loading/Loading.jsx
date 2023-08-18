import React from "react";
import styles from "./Loading.module.scss";

const Loading = ({ isDark }) => {
  return (
    <div>
      <span className={`${styles.antSpinDot} ${styles.antSpinDotSpin}`}>
        <i className={styles[isDark ? "isDark" : ""]}></i>
        <i className={styles[isDark ? "isDark" : ""]}></i>
        <i className={styles[isDark ? "isDark" : ""]}></i>
        <i className={styles[isDark ? "isDark" : ""]}></i>
      </span>
    </div>
  );
};

export default Loading;
