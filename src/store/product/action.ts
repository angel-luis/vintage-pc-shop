import { Product } from "@/lib/definitions";
import { createAction } from "@/store/utils";

export const setProducts = (products: Product[]) =>
  createAction<Product[]>("SET_PRODUCTS", products);
