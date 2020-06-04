import * as types from "../actions/actionTypes";
import { HYDRATE } from "next-redux-wrapper";

export default function counter(state = 0, action) {
  switch (action.type) {
    case types.ADD:
      return state + 1;
    case types.SUB:
      return state - 1;
    default:
      return state;
  }
}
