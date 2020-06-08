import * as types from "../types";

export const add = (counter) => ({
  type: types.ADD,
  counter,
});

export const sub = (counter) => ({
  type: types.SUB,
  counter,
});
