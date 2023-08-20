import { Navigate } from "react-router-dom";


const RequireAuth = ({ children }) => {
  const authDataString = localStorage.getItem("auth");

  if (!authDataString) {
    return <Navigate to="/login" />;
  }

  const authData = JSON.parse(authDataString);
  if (!authData || !authData.token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
