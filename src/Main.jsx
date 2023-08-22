import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { RequireAuth } from "./components/shared/RequireAuth";
import { ProjectsProvider } from "./context/ProjectsContext";
import { ServicesProvider } from "./context/ServiceContext";
import { CreateProject } from "./pages/CreateProject";
import { Login } from "./pages/Login";
import { Projects } from "./pages/Projects";

const Main = () => {
  return (
    <div>
      <ProjectsProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Projects />
                </RequireAuth>
              }
            />
            <Route
              path="/create"
              element={
                <RequireAuth>
                  <ServicesProvider>
                    <CreateProject />
                  </ServicesProvider>
                </RequireAuth>
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
