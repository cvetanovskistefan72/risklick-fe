import React, { createContext, useContext, useState } from "react";
import { useApi } from "./ApiContext";
import { PROJECTS_ENDPOINT } from "../api/endpoints";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const { axiosClient } = useApi();

  const getProjects = async () => {
    try {
      const res = await axiosClient.get(PROJECTS_ENDPOINT);
      setProjects(res?.data?.data);
    } catch (error) {}
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        getProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
