import "@/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HeaderLayout from "@/routes/header";
import HomePage from "@/routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
