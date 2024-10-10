import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "@/store/reducer";

const middlewares = [logger];

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
