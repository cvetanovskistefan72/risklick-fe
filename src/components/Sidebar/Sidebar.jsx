import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../shared/Icon";
import styles from "./Sidebar.module.scss";
import { Typography } from "../shared/Typography";
import { useAuthentication } from "../../context/AuthContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { logout } = useAuthentication();

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className={`${styles.root} ${isOpen ? styles.open : ""}`}>
      <div className={styles.content}>
        <div className={styles.toggle}>
          <Icon
            onClick={toggleSidebar}
            name="menu"
            width="60px"
            height="60px"
          />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a
                onClick={logout}
                className={`${styles.navLink} ${styles.logout}`}
              >
                <Icon name="logout" size="small" />
                <Typography
                  text="Logout"
                  size="md"
                  className={styles.navItem}
                />
              </a>
            </li>
            <div>
              <hr />
            </div>
            <li>
              <Link to="/" className={styles.navLink}>
                <Icon name="project" size="small" />
                <Typography
                  text="Projects"
                  size="lg"
                  className={styles.navItem}
                />
              </Link>
            </li>
            <li>
              <Link to="/create" className={styles.navLink}>
                <Icon name="add" size="small" />
                <Typography
                  text="Create Project"
                  size="lg"
                  className={styles.navItem}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
