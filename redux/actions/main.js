import * as t from "../types";

export const setInfo = (name) => ({
  type: t.SET_NAME,
  payload: name
});