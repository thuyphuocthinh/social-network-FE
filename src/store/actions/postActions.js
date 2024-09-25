import { STATUS_CODE } from "../../config/constant";
import { postService } from "../../services/PostService";
import {
  CANNOT_LOAD_MORE,
  RESET_POSTS_BY_USER,
  RESET_POSTS_SKIP_ITEM,
  SET_POSTS_BY_USER,
  SET_POSTS_SKIP_ITEM,
} from "../actionTypes/postActionTypes";

export const setPostsByUserAction = (userId, skipItem) => {
  return async (dispatch) => {
    try {
      const result = await postService.getPostsByUser(userId, skipItem);
      if (result.status === STATUS_CODE.SUCCESS) {
        if (result.data.data.posts.length === 0) {
          dispatch(setCannotLoadMoreAction());
        } else {
          dispatch({
            type: SET_POSTS_BY_USER,
            payload: result.data.data,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setPostsSkipItemAction = () => {
  return {
    type: SET_POSTS_SKIP_ITEM,
  };
};

export const resetPostsSkipItemAction = () => {
  return {
    type: RESET_POSTS_SKIP_ITEM,
  };
};

export const resetPostsByUserAction = () => {
  return {
    type: RESET_POSTS_BY_USER,
  };
};

export const setCannotLoadMoreAction = () => {
  return {
    type: CANNOT_LOAD_MORE,
  };
};
