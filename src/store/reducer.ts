import cartReducer from "@/store/cart/reducer";
import productReducer from "@/store/product/reducer";
import userReducer from "@/store/user/slice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});
