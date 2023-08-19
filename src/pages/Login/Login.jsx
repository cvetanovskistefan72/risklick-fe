import React, { useEffect, useState } from "react";
import { Typography } from "../../components/shared/Typography";
import { Button } from "../../components/shared/Button";
import { InputField } from "../../components/shared/InputField";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../context/AuthContext";
import { useApi } from "../../context/ApiContext";
import { Loading } from "../../components/shared/Loading";
import styles from "./Login.module.scss";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { loading } = useApi();
  const { isAuthenticated, login } = useAuthentication();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => login(credentials);

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <Typography
          className={styles.header}
          text="Login"
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
          name="email"
          className={styles.email}
          placeholder="Enter email"
          value={credentials.email}
          onChange={handleChange}
          icon
          iconName="mail"
          iconSize="small"
          iconClass={styles.mailIcon}
        />
        <InputField
          type="password"
          label="Password"
          name="password"
          className={styles.password}
          placeholder="Enter password"
          value={credentials.password}
          onChange={handleChange}
          icon
          iconName="lock"
          iconSize="small"
          iconClass={styles.passwordIcon}
        />
        {loading && (
          <div className={styles.loading}>
            <Loading isDark />
          </div>
        )}
        {!loading && (
          <Button
            className={styles.button}
            text="Login"
            width="100%"
            size="medium"
            onClick={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
