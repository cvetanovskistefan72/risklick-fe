import React, { createContext, useContext, useState } from "react";
import { PROJECTS_ENDPOINT } from "../api/endpoints";
import { useApiClient } from "../hooks/useApiClient";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const api = useApiClient();

  const getProjects = async () => {
    try {
      const { data } = await api.get(PROJECTS_ENDPOINT);
      setProjects(data);
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
