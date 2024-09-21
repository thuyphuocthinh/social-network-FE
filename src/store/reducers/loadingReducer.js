import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/loadingActionTypes";

const initialState = {
  showLoading: false,
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

    default:
      return state;
  }
};
