import { USER_LOGIN, USER_REGISTER } from "../actionTypes/userActionTypes";

const initialState = {
  isLoggedIn: false,
  userLogin: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case (USER_LOGIN, USER_REGISTER): {
      return {
        ...state,
        isLoggedIn: true,
        userLogin: action.payload,
      };
    }

    default:
      return state;
  }
};
