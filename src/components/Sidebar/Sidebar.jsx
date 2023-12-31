import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthentication } from "../../context/AuthContext";
import { Icon } from "../shared/Icon";
import { Typography } from "../shared/Typography";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuthentication();

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className={`${styles.root} ${isOpen ? styles.open : ""}`}>
      <div className={styles.content}>
        <div className={styles.toggle}>
          <Icon
            onClick={toggleSidebar}
            name={isOpen ? "close" : "left"}
            width="50px"
            height="50px"
          />
        </div>
        <nav className={styles.nav}>
          <ul>
            <a
              onClick={logout}
              className={`${styles.navLink} ${styles.logout}`}
            >
              <li>
                <Icon name="logout" size="sm" />
                <Typography
                  text="Logout"
                  size="md"
                  className={styles.navItem}
                />
              </li>
            </a>
            <div>
              <hr />
            </div>
            <Link
              to="/"
              className={`${styles.navLink} ${
                location.pathname === "/" ? styles.active : ""
              }`}
            >
              <li>
                <Icon name="project" size="sm" />
                <Typography
                  text="Projects"
                  size="lg"
                  className={styles.navItem}
                />
              </li>
            </Link>
            <Link
              to="/create"
              className={`${styles.navLink} ${
                location.pathname === "/create" ? styles.active : ""
              }`}
            >
              <li>
                <Icon name="add" size="sm" />
                <Typography
                  text="Create Project"
                  size="lg"
                  className={styles.navItem}
                />
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
