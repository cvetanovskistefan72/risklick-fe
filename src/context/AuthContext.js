import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useApiClient } from "../hooks/useApiClient";
import { LOGIN_ENDPOINT } from "../api/endpoints";
import { welcomeMessage } from "../constants";
import convertExpiresInToDate from "../helpers/convertExpiresInToDate";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const api = useApiClient();

  const login = async (body) => {
    try {
      const { data } = await api.post(LOGIN_ENDPOINT, body);

      if (data?.token && data?.expires_in) {
        const expirationDate = convertExpiresInToDate(data.expires_in);
        const authData = {
          token: data.token,
          expirationDate: expirationDate,
        };
        localStorage.setItem("auth", JSON.stringify(authData));
        toast.success(welcomeMessage);
        navigate("/");
      }
    } catch (error) {}
  };

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthContext);
