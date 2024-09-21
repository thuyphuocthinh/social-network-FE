import AuthLayout from "../layouts/clients/auth/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Cookies from "js-cookie";
import ProtectedRoute from "./ProtectedRoute";
import { TOKEN } from "../config/constant";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Profile from "../pages/profile/Profile";
import Home from "../pages/home/Home";
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
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/profile/:userId",
        // => /profile/:userId
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
    element: <Home />,
  },
]);
