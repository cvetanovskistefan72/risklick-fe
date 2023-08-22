import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PROJECTS_ENDPOINT } from "../api/endpoints";
import { useApiClient } from "../hooks/useApiClient";
import validateErrors from "../helpers/validateErrors";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(null);
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
      const data = await api.post(PROJECTS_ENDPOINT, payload);

      if (data.hasOwnProperty("success")) {
        validateErrors(data.data);
        return;
      }

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
