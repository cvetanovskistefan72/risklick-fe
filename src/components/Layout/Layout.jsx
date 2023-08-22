import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.root}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.dashboard}>
          <Outlet />
      </div>
    </div>
  );
};

export default Layout;
