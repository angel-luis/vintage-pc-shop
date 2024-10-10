import { User } from "firebase/auth";

import { Product } from "@/lib/definitions";

export type RootState = {
  user: User | null;
  products: Product[];
};

export type UserActionTypes = "SET_USER";

export type ProductActionTypes = "SET_PRODUCTS";
