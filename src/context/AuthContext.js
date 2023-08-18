import React, { createContext, useContext, useState } from "react";
import { useApi } from "./ApiContext";
import { LOGIN_ENDPOINT } from "../api/endpoints";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuthState = sessionStorage.getItem("TOKEN");
    return storedAuthState ? true : false;
  });
  const { axiosClient } = useApi();

  const login = async (body) => {
    try {
      const res = await axiosClient.post(LOGIN_ENDPOINT, body);
      if (res?.data?.data?.token) {
        sessionStorage.setItem("TOKEN", res?.data?.data?.token);
        setIsAuthenticated(true);
        toast.success("Welcome");
      }
    } catch (error) {}
  };

  const logout = () => {
    sessionStorage.removeItem("TOKEN");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthContext);
