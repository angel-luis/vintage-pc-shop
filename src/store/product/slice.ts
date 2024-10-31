import { getProducts } from "@/data/firebase";
import { Product } from "@/lib/definitions";
import { ProductState } from "@/store/types";
import { createSlice, Dispatch } from "@reduxjs/toolkit";

const initialState: ProductState = {
  products: [] as Product[],
  loading: false,
  error: null,
};

export const fetchProductsAsync = () => async (dispatch: Dispatch) => {
  dispatch(fetchProductsStart());

  try {
    const products = await getProducts();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    dispatch(fetchProductsFailure(error as string));
  }
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;

export default productSlice.reducer;
