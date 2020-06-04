import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import rootReducer from "./reducers";

const middleware =
  process.env.NODE_ENV !== "production"
    ? [require("redux-immutable-state-invariant").default()]
    : null;

function makeStore(initialState) {
  initialState = { counter: 12 };
  const composeEnhancers =
    (typeof window != "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
