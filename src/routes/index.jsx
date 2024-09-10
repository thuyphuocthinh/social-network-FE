import AuthLayout from "../layouts/clients/auth/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

export const routes = [
  {
    path: "/",
    element: "",
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];
