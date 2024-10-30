import { RootState } from "@/store/types";

export const getProducts = (state: RootState) => state.products.products;
