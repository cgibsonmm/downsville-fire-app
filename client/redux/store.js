import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const initialState = {
  counter: 10,
};

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
