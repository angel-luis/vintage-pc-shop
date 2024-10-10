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

export type UserActionTypes = "user/SET_USER";

export type ProductActionTypes = "products/SET_PRODUCTS";

export type CartAction =
  | { type: "cart/UPDATE_CART_PRODUCTS"; payload: ProductWithQuantity[] }
  | { type: "cart/SET_DRAWER_OPEN"; payload: boolean };
