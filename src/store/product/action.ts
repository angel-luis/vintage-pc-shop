import { Product } from "@/lib/definitions";
import { createAction } from "@/store/utils";

export const setProducts = (products: Product[]) =>
  createAction<Product[]>("products/SET_PRODUCTS", products);
