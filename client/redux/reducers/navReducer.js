import * as types from "../types";

const initialState = false;

export default function navReducer(state = initialState, action) {
  switch (action.type) {
    case types.MEMBER_DROP_TOGGLE:
      return !state;
    default:
      return state;
  }
}
