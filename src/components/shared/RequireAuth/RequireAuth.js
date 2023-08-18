import { Navigate } from "react-router-dom";
import { useAuthentication } from "../../../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuthentication();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
