import "@/global.css";
import "@fontsource-variable/handjet";
import "@fontsource-variable/roboto-mono";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CartContextProvider } from "@/contexts/cart";
import { ProductContextProvider } from "@/contexts/product";
import { UserContextProvider } from "@/contexts/user";
import AboutPage from "@/routes/about";
import AuthenticationPage from "@/routes/authentication";
import HomePage from "@/routes/home";
import MainLayout from "@/routes/layouts/main";
import MyAccountPage from "@/routes/my-account";
import NoMatchPage from "@/routes/no-match";
import ProductPage from "@/routes/product";
import ShopPage from "@/routes/shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NoMatchPage />,
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
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "product/:slug",
        element: <ProductPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </ProductContextProvider>
    </UserContextProvider>
  </StrictMode>
);
