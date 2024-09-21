import { toast } from "react-toastify";
import {
  USER_DETAIL,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  USER_UPDATE,
} from "../actionTypes/userActionTypes";
import { userService } from "../../services/UserService";
import { hideLoadingAction, showLoadingAction } from "./loadingActions";
import { STATUS_CODE } from "../../config/constant";

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

export const userLogoutAction = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const userUpdateAction = (updateInfo) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction());
      const result = await userService.update(updateInfo);
      if (result.status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: USER_UPDATE,
          payload: result.data.data,
        });
        toast.success(result.data.message);
      }
    } catch (error) {
      toast.error(error.data.message);
    } finally {
      dispatch(hideLoadingAction());
    }
  };
};

export const userDetailAction = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction());
      const result = await userService.getDetail(userId);
      if (result.status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: USER_DETAIL,
          payload: result.data.data,
        });
        toast.success(result.data.message);
      }
    } catch (error) {
      toast.error(error.data.message);
    } finally {
      dispatch(hideLoadingAction());
    }
  };
};