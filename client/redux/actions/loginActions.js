import * as types from "../types";
import { fetchMemberToken, fetchCurrentMemberData } from "../../helpers/api";

const fetchMemberRequest = () => {
  return {
    type: types.LOGIN_MEMBER_REQUEST,
  };
};

const fetchMemberSuccess = (payload) => {
  console.log(payload);
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

export const loginMember = (data) => {
  return (dispatch) => {
    dispatch(fetchMemberRequest());

    fetchMemberToken(data)
      .then((res) => dispatch(fetchMemberSuccess(res)))
      .catch((e) => dispatch(fetchMemberFailure(e.response.data.errors)));
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
