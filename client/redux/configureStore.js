import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./reducers";

const middleware =
  process.env.NODE_ENV !== "production"
    ? [require("redux-immutable-state-invariant").default()]
    : null;

function makeStore(initialState) {
  const composeEnhancers =
    (typeof window != "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}

export const wrapper = createWrapper(makeStore, { debug: true });
