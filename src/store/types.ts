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
