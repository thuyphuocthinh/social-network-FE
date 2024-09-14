import { USER_LOGIN, USER_REGISTER } from "../actionTypes/userActionTypes";

export const userLoginAction = (userInfo) => {
  return {
    type: USER_LOGIN,
    payload: userInfo,
  };
};

export const userRegisterAction = (userInfo) => {
  return {
    type: USER_REGISTER,
    payload: userInfo,
  };
};
