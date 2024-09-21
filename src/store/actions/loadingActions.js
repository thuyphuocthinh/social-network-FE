import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/loadingActionTypes";

export const showLoadingAction = () => {
  return {
    type: SHOW_LOADING,
  };
};

export const hideLoadingAction = () => {
  return {
    type: HIDE_LOADING,
  };
};
