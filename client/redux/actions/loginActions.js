import * as types from "../types";
import { fetchMemberToken, fetchCurrentMemberData } from "../../helpers/api";

const fetchMemberRequest = () => {
  return {
    type: types.LOGIN_MEMBER_REQUEST,
  };
};

const fetchMemberSuccess = (payload) => {
  return {
    type: types.LOGIN_MEMBER_SUCCESS,
    payload,
  };
};

const fetchMemberFailure = (payload) => {
  return {
    type: types.LOGIN_MEMBER_FAILURE,
    payload,
  };
};

const clearMemberState = () => {
  return {
    type: types.LOGOUT_MEMBER,
  };
};

export const loginMember = (data) => {
  return (dispatch) => {
    dispatch(fetchMemberRequest());

    fetchMemberToken(data)
      .then((res) => dispatch(fetchMemberSuccess(res)))
      .catch((e) => dispatch(fetchMemberFailure(e.response.data.errors)));
  };
};

export const logoutMember = () => {
  return (dispatch) => {
    localStorage.clear("token");
    dispatch(clearMemberState());
  };
};

export const fetchMemberData = () => {
  return (dispatch) => {
    dispatch(fetchMemberRequest());
    fetchCurrentMemberData()
      .then((res) => dispatch(fetchMemberSuccess(res)))
      .catch((e) => dispatch(fetchMemberFailure(e.response.data.errors)));
  };
};
