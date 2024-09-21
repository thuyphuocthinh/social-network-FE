import { SELECTED_TAB_ACTION_TYPE } from "../actionTypes/tabActionTypes";

export const selectTabAction = (payload) => {
  return {
    type: SELECTED_TAB_ACTION_TYPE,
    payload,
  };
};
