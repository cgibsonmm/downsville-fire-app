import * as types from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  error: null,
  loading: false,
  member: null,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return state;
    case types.LOGIN_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_MEMBER_SUCCESS:
      return {
        loading: false,
        member: action.payload,
        error: null,
      };
    case types.LOGIN_MEMBER_FAILURE:
      return {
        loading: false,
        member: null,
        error: action.payload,
      };

    case types.LOGOUT_MEMBER:
      return {
        ...state,
        member: null,
      };
    default:
      return state;
  }
}
