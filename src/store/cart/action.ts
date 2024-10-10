import { ProductWithQuantity } from "@/lib/definitions";
import { createAction } from "@/store/utils";

export const updateCartProducts = (products: ProductWithQuantity[]) =>
  createAction<ProductWithQuantity[]>("UPDATE_CART_PRODUCTS", products);

export const setDrawerOpen = (isDrawerOpen: boolean) =>
  createAction<boolean>("SET_DRAWER_OPEN", isDrawerOpen);
