import React, { createContext, useContext, useState } from "react";
import { SERVICES_ENDPOINT } from "../api/endpoints";
import { useApiClient } from "../hooks/useApiClient";

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState(null);
  const api = useApiClient();
  const getServices = async () => {
    try {
      const { data } = await api.get(SERVICES_ENDPOINT);
      setServices(data);
    } catch (error) {}
  };

  return (
    <ServicesContext.Provider
      value={{
        services,
        getServices,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
