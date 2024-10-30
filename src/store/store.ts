import { applyMiddleware, compose, createStore, Middleware } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "@/store/reducer";
import { rootSaga } from "@/store/sagas";

const sagaMiddleware = createSagaMiddleware();

// Show logger only in development environment
const middlewares = [
  import.meta.env.VITE_ENVIRONMENT === "development" && logger,
  sagaMiddleware,
].filter(Boolean) as Middleware[];

// Use Redux DevTools Extension only in development environment
const composeEnhancer =
  (import.meta.env.VITE_ENVIRONMENT !== "production" &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// Sorry but I couldn't find a better solution
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistedReducer = persistReducer(persistConfig, rootReducer as any);

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
