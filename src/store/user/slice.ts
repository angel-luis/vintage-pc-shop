import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_state, action) => action.payload?.uid,
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
