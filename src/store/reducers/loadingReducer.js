import {
  HIDE_LAZY_LOADING,
  HIDE_LOADING,
  SHOW_LAZY_LOADING,
  SHOW_LOADING,
} from "../actionTypes/loadingActionTypes";

const initialState = {
  showLoading: false,
  lazyLoading: false,
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING: {
      return {
        ...state,
        showLoading: true,
      };
    }

    case HIDE_LOADING: {
      return {
        ...state,
        showLoading: false,
      };
    }

    case SHOW_LAZY_LOADING: {
      return {
        ...state,
        lazyLoading: true,
      };
    }

    case HIDE_LAZY_LOADING: {
      return {
        ...state,
        lazyLoading: false,
      };
    }

    default:
      return state;
  }
};
