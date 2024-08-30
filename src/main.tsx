import "@/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ProductContextProvider } from "@/contexts/product-context";
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
      <ProductContextProvider>
        <RouterProvider router={router} />
      </ProductContextProvider>
    </UserContextProvider>
  </StrictMode>
);
