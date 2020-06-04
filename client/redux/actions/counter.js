import * as types from "./actionTypes";

export const add = (count) => ({
  type: types.ADD,
  count,
});

export const sub = (count) => ({
  type: types.SUB,
  count,
});
