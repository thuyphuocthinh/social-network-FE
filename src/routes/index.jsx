import AuthLayout from "../layouts/clients/auth/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Error from "../pages/error/Error";
import Cookies from "js-cookie";
import ProtectedRoute from "./ProtectedRoute";
import Test from "../pages/home/test";
import { TOKEN } from "../config/constant";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Profile from "../pages/profile/Profile";

const getAccessToken = () => {
  return Cookies.get(TOKEN);
};

const isAuthenticated = () => {
  return !!getAccessToken();
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
    children: [
      {
        path: "/",
        element: <Test />,
      },
      {
        path: "home",
        element: <Test />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout isAuthenticated={isAuthenticated} />, // Authentication will be handled inside AuthLayout
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <Login />, // Redirect if already authenticated
      },
      {
        path: "register",
        element: <Register />, // Same logic for register
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
