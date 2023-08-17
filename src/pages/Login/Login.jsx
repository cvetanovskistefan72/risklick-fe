import React from "react";
import { Typography } from "../../components/shared/Typography";
import { Button } from "../../components/shared/Button";
import { InputField } from "../../components/shared/InputField";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <Typography
          className={styles.header}
          text="Welcome"
          type="display"
          size="sm"
        />
        <Typography
          className={styles.header2}
          text="Please enter your email and password"
          size="sm"
        />
        <InputField
          type="text"
          label="Email"
          className={styles.email}
          placeholder="Enter email"
          icon
          iconName="mail"
          iconSize="small"
          iconClass={styles.mailIcon}
        />
        <InputField
          type="password"
          label="Password"
          className={styles.password}
          placeholder="Enter password"
          icon
          iconName="lock"
          iconSize="small"
          iconClass={styles.passwordIcon}
        />
        <Button
          className={styles.button}
          text="Login"
          width="100%"
          size="medium"
        />
      </div>
    </div>
  );
};

export default Login;
