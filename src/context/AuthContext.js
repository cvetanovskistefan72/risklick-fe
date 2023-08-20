import React, { createContext, useContext, useState } from "react";
import { LOGIN_ENDPOINT } from "../api/endpoints";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useApiClient } from "../hooks/useApiClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuthState = localStorage.getItem("TOKEN");
    return storedAuthState ? true : false;
  });
  const navigate = useNavigate();
  const api = useApiClient();

  const login = async (body) => {
    try {
      const { data } = await api.post(LOGIN_ENDPOINT, body);

      if (data?.token) {
        localStorage.setItem("TOKEN", data?.token);
        setIsAuthenticated(true);
        navigate("/");
        toast.success("Welcome");
      }
    } catch (error) {}
  };

  const logout = () => {
    localStorage.removeItem("TOKEN");
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
