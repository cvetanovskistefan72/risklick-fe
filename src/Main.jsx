import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Projects } from "./pages/Projects";
import { Layout } from "./components/Layout";
import { CreateProject } from "./pages/CreateProject";
import { Toaster } from "react-hot-toast";
import { ProjectsProvider } from "./context/ProjectsContext";
import { ServicesProvider } from "./context/ServiceContext";

const Main = () => {
  return (
    <div>
      <ProjectsProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Projects />} />
            <Route
              path="/create"
              element={
                <ServicesProvider>
                  <CreateProject />
                </ServicesProvider>
              }
            />
          </Route>
          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
        <Toaster position="top-right" />
      </ProjectsProvider>
    </div>
  );
};

export default Main;
