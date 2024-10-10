import { ProductWithQuantity } from "@/lib/definitions";
import { createAction } from "@/store/utils";

export const updateCartProducts = (products: ProductWithQuantity[]) =>
  createAction<ProductWithQuantity[]>("cart/UPDATE_CART_PRODUCTS", products);

export const setDrawerOpen = (isDrawerOpen: boolean) =>
  createAction<boolean>("cart/SET_DRAWER_OPEN", isDrawerOpen);
