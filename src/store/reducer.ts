import cartReducer from "@/store/cart/slice";
import productReducer from "@/store/product/slice";
import userReducer from "@/store/user/slice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});
