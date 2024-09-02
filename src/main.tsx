import "@/global.css";
import "@fontsource-variable/handjet";
import "@fontsource-variable/roboto-mono";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CartContextProvider } from "@/contexts/cart-context";
import { ProductContextProvider } from "@/contexts/product-context";
import { UserContextProvider } from "@/contexts/user-context";
import AuthenticationPage from "@/routes/authentication";
import HomePage from "@/routes/home";
import MainLayout from "@/routes/layouts/main";
import MyAccountPage from "@/routes/my-account";
import ProductPage from "@/routes/product";
import ShopPage from "@/routes/shop";
import ShopBrandPage from "@/routes/shop-brand";

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
      {
        path: "shop/:brandSlug",
        element: <ShopBrandPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "product/:slug",
        element: <ProductPage />,
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
