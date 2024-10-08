import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";

import { rootReducer } from "@/store/reducer";

const middlewares = [logger];

const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
