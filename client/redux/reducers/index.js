import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import counter from "./counter";

const rootReducer = combineReducers({
  counter,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.counter) nextState.counter = state.counter;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export default reducer;
