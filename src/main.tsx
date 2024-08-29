import "@/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { UserContextProvider } from "@/contexts/user-context";
import AuthenticationPage from "@/routes/authentication";
import HomePage from "@/routes/home";
import MainLayout from "@/routes/layouts/main";
import MyAccountPage from "@/routes/my-account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "authentication",
        element: <AuthenticationPage />,
      },
      {
        path: "my-account",
        element: <MyAccountPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
