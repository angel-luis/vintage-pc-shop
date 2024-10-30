import { User } from "firebase/auth";

import { Product, ProductWithQuantity } from "@/lib/definitions";

// State
export type CartState = {
  cartProducts: ProductWithQuantity[];
  isDrawerOpen: boolean;
};

export type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export type RootState = {
  user: User | null;
  products: ProductState;
  cart: CartState;
};

// Actions
export type UserAction = {
  type: "user/SET_USER";
  payload: User | null;
};

export type ProductAction =
  | {
      type: "products/FETCH_PRODUCTS_START";
    }
  | {
      type: "products/FETCH_PRODUCTS_SUCCESS";
      payload: Product[];
    }
  | {
      type: "products/FETCH_PRODUCTS_FAILURE";
      payload: string | null;
    };

export type CartAction =
  | { type: "cart/UPDATE_CART_PRODUCTS"; payload: ProductWithQuantity[] }
  | { type: "cart/SET_DRAWER_OPEN"; payload: boolean };

export type RootAction = UserAction | ProductAction | CartAction;
