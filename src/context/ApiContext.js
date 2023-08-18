import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { apiBaseUrl, defaultError } from "../constants";
import { toast } from "react-hot-toast";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const axiosClient = axios.create({
    baseURL: apiBaseUrl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  axiosClient.interceptors.request.use((config) => {
    setLoading(true);
    return config;
  });

  axiosClient.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => {
      setLoading(false);
      const errorMessage = error.response?.data?.message || defaultError;
      toast.error(errorMessage);
      throw error;
    }
  );

  return (
    <ApiContext.Provider value={{ axiosClient, loading }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
