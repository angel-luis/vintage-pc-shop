import logger from "redux-logger";

import { rootReducer } from "@/store/reducer";
import { configureStore, Middleware } from "@reduxjs/toolkit";

// Show logger only in development environment
const middlewares = [
  import.meta.env.VITE_ENVIRONMENT === "development" && logger,
].filter(Boolean) as Middleware[];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
