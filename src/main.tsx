import "@/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AccountAccessPage from "@/routes/account-access";
import HomePage from "@/routes/home";
import MainLayout from "@/routes/layouts/main";

import MyAccountPage from "./routes/my-account";

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
        path: "account-access",
        element: <AccountAccessPage />,
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
    <RouterProvider router={router} />
  </StrictMode>
);
