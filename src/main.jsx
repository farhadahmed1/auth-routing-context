import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Orders from "./components/Orders.jsx";
import PrivateRouts from "./routes/PrivateRouts.jsx";
import Profile from "./components/Profile.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRouts>
            <Orders></Orders>
          </PrivateRouts>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouts>
            <Profile></Profile>
          </PrivateRouts>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouts>
            <Dashboard></Dashboard>
          </PrivateRouts>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
