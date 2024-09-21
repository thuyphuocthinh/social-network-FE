import { SELECTED_TAB_ACTION_TYPE } from "../actionTypes/tabActionTypes";

const initialState = {
  selectedTab: "posts",
};

export const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_TAB_ACTION_TYPE: {
      return {
        ...state,
        selectedTab: action.payload,
      };
    }
    default:
      return state;
  }
};
