import { User } from "firebase/auth";

import { Product, ProductWithQuantity } from "@/lib/definitions";

export type CartState = {
  cartProducts: ProductWithQuantity[];
  isDrawerOpen: boolean;
};

export type RootState = {
  user: User | null;
  products: Product[];
  cart: CartState;
};

export type UserActionTypes = "SET_USER";

export type ProductActionTypes = "SET_PRODUCTS";

export type CartAction =
  | { type: "UPDATE_CART_PRODUCTS"; payload: ProductWithQuantity[] }
  | { type: "SET_DRAWER_OPEN"; payload: boolean };
