import { applyMiddleware, compose, createStore, Middleware } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "@/store/reducer";

// Show logger only in development environment
const middlewares = [
  import.meta.env.VITE_ENVIRONMENT === "development" && logger,
].filter(Boolean) as Middleware[];

const composeEnhancers = compose(applyMiddleware(...middlewares));

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

// Sorry but I couldn't find a better solution
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistedReducer = persistReducer(persistConfig, rootReducer as any);

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
