import React, { useState } from "react";
import { Typography } from "../../components/shared/Typography";
import { Button } from "../../components/shared/Button";
import { InputField } from "../../components/shared/InputField";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../context/AuthContext";
import { useApi } from "../../context/ApiContext";
import { LOGIN_ENDPOINT } from "../../api/endpoints";
import styles from "./Login.module.scss";
import { Loading } from "../../components/shared/Loading";

const Login = () => {
  const navigate = useNavigate();
  const { axiosClient, loading } = useApi();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { handleAuthentication } = useAuthentication();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const login = async () => await axiosClient.post(LOGIN_ENDPOINT, credentials);

  const handleSubmit = async () => {
    try {
      const resp = await login();
      handleAuthentication(resp?.data?.data.token);
      navigate("/");
    } catch (error) {}
  };

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
            {" "}
            <Loading isDark />
          </div>
        )}
        {!loading && (
          <Button
            className={styles.button}
            type="secondary"
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
