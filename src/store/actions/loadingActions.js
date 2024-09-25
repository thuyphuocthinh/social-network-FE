import {
  HIDE_LAZY_LOADING,
  HIDE_LOADING,
  SHOW_LAZY_LOADING,
  SHOW_LOADING,
} from "../actionTypes/loadingActionTypes";

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

export const showLazyLoadingAction = () => {
  return {
    type: SHOW_LAZY_LOADING,
  };
};

export const hideLazyLoadingAction = () => {
  return {
    type: HIDE_LAZY_LOADING,
  };
};
