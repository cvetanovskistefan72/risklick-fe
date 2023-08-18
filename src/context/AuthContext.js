import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuthState = sessionStorage.getItem("TOKEN");
    return storedAuthState ? true : false;
  });

  const handleAuthentication = (token) => {
    sessionStorage.setItem("TOKEN", token);
    setIsAuthenticated(token);
  };

  const logout = () => {
    sessionStorage.removeItem("TOKEN");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleAuthentication,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthContext);
