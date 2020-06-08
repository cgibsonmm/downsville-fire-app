import * as types from "../types";
import { HYDRATE } from "next-redux-wrapper";

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case HYDRATE:
      return state;
    case types.ADD:
      return state + 1;
    case types.SUB:
      return state - 1;
    default:
      return state;
  }
}
