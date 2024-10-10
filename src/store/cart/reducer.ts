import { CartAction, CartState } from "@/store/types";

const initialState: CartState = {
  cartProducts: [],
  isDrawerOpen: false,
};

export default function cartReducer(
  state: CartState = initialState,
  action: CartAction
) {
  switch (action.type) {
    case "cart/UPDATE_CART_PRODUCTS":
      return { ...state, cartProducts: action.payload };
    case "cart/SET_DRAWER_OPEN":
      return { ...state, isDrawerOpen: action.payload };
    default:
      return state;
  }
}
