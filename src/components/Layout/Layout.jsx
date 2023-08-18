import React from "react";
import { Sidebar } from "../Sidebar";
import { Outlet } from "react-router-dom";
import { RequireAuth } from "../shared/RequireAuth";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.root}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.dashboard}>
        <RequireAuth>
          <Outlet />
        </RequireAuth>
      </div>
    </div>
  );
};

export default Layout;
