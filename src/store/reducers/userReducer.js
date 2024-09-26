import {
  USER_ALL_FRIENDS,
  USER_DETAIL,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  USER_UPDATE,
} from "../actionTypes/userActionTypes";

const initialState = {
  isLoggedIn: false,
  userLogin: {},
  userDetail: {},
  userAllFriends: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
    case USER_REGISTER: {
      return {
        ...state,
        isLoggedIn: true,
        userLogin: action.payload,
      };
    }

    case USER_LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        userLogin: {},
      };
    }

    case USER_UPDATE: {
      return {
        ...state,
        userLogin: action.payload,
      };
    }

    case USER_DETAIL: {
      return {
        ...state,
        userDetail: action.payload,
      };
    }

    case USER_ALL_FRIENDS: {
      return {
        ...state,
        userAllFriends: action.payload,
      };
    }

    default:
      return state;
  }
};
