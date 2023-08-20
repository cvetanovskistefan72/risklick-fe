import React, { createContext, useContext, useState } from "react";
import { useApi } from "./ApiContext";
import { SERVICES_ENDPOINT } from "../api/endpoints";

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const { axiosClient } = useApi();

  const getServices = async () => {
    try {
      const res = await axiosClient.get(SERVICES_ENDPOINT);
      setServices(res?.data?.data);
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
