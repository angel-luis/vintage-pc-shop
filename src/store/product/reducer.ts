import { Product } from "@/lib/definitions";
import { ProductAction, ProductState } from "@/store/types";

const initialState: ProductState = {
  products: [] as Product[],
  loading: false,
  error: null,
};

export default function productReducer(
  state = initialState,
  action: ProductAction
) {
  switch (action.type) {
    case "products/FETCH_PRODUCTS_START":
      return { ...state, loading: true };
    case "products/FETCH_PRODUCTS_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "products/FETCH_PRODUCTS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
