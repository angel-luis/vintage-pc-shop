import { combineReducers } from "redux";

import cartReducer from "@/store/cart/reducer";
import productReducer from "@/store/product/reducer";
import userReducer from "@/store/user/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});
