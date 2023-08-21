import React, { createContext, useContext, useState } from "react";
import { PROJECTS_ENDPOINT, SERVICES_ENDPOINT } from "../api/endpoints";
import { useApiClient } from "../hooks/useApiClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const api = useApiClient();
  const navigate = useNavigate();

  const getProjects = async () => {
    try {
      const { data } = await api.get(PROJECTS_ENDPOINT);
      setProjects(data);
    } catch (error) {}
  };

  const addProject = async (payload) => {
    try {
      await api.post(SERVICES_ENDPOINT, payload);
      toast.success("Project Created!");
      navigate("/");
    } catch (error) {}
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        getProjects,
        addProject,
        setProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
