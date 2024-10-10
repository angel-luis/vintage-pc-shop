import { RootState } from "@/store/types";

export const getCartProducts = (state: RootState) => state.cart.cartProducts;
export const getIsDrawerOpen = (state: RootState) => state.cart.isDrawerOpen;
