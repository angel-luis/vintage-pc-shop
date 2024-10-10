import { Product } from "@/lib/definitions";
import { ProductActionTypes } from "@/store/types";

const initialState: Product[] = [];

type ProductAction = {
  type: ProductActionTypes;
  payload: Product[];
};

export default function productReducer(
  state: Product[] = initialState,
  action: ProductAction
) {
  switch (action.type) {
    case "products/SET_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
}
