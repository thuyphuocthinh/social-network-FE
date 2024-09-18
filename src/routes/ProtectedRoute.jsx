import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
