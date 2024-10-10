import { User } from "firebase/auth";

import { Product, ProductWithQuantity } from "@/lib/definitions";

// State
export type CartState = {
  cartProducts: ProductWithQuantity[];
  isDrawerOpen: boolean;
};

export type RootState = {
  user: User | null;
  products: Product[];
  cart: CartState;
};

// Actions
export type UserAction = {
  type: "user/SET_USER";
  payload: User | null;
};

export type ProductAction = {
  type: "products/SET_PRODUCTS";
  payload: Product[];
};

export type CartAction =
  | { type: "cart/UPDATE_CART_PRODUCTS"; payload: ProductWithQuantity[] }
  | { type: "cart/SET_DRAWER_OPEN"; payload: boolean };

export type RootAction = UserAction | ProductAction | CartAction;
