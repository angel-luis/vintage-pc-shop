import { createSelector } from "reselect";

import { RootState } from "@/store/types";

const getCart = (state: RootState) => state.cart;

export const getCartProducts = createSelector(
  [getCart],
  (cart) => cart.cartProducts
);

export const getIsDrawerOpen = createSelector(
  [getCart],
  (cart) => cart.isDrawerOpen
);
