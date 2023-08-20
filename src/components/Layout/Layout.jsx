import React from "react";
import { Sidebar } from "../Sidebar";
import { Outlet } from "react-router-dom";
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
