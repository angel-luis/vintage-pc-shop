import { CartState } from "@/store/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
  cartProducts: [],
  isDrawerOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartProducts: (state, action) => {
      state.cartProducts = action.payload;
    },
    setDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const { updateCartProducts, setDrawerOpen } = cartSlice.actions;

export default cartSlice.reducer;
