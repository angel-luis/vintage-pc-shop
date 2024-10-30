import { Dispatch } from "redux";

import { getProducts } from "@/data/firebase";
import { Product } from "@/lib/definitions";
import { createAction } from "@/store/utils";

export const fetchProductsAsync = () => async (dispatch: Dispatch) => {
  dispatch(fetchProductsStart());

  try {
    const products = await getProducts();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    dispatch(fetchProductsFailure(error as string));
  }
};

export const fetchProductsStart = () =>
  createAction<null>("products/FETCH_PRODUCTS_START", null);

export const fetchProductsSuccess = (products: Product[]) =>
  createAction<Product[]>("products/FETCH_PRODUCTS_SUCCESS", products);

export const fetchProductsFailure = (error: string | null) =>
  createAction<string | null>("products/FETCH_PRODUCTS_FAILURE", error);
