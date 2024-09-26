import { SKIP_ITEM } from "../../config/constant";
import {
  CANNOT_LOAD_MORE,
  RESET_POSTS_BY_USER,
  RESET_POSTS_SKIP_ITEM,
  SET_POSTS_BY_USER,
  SET_POSTS_SKIP_ITEM,
} from "../actionTypes/postActionTypes";

const initialState = {
  postsByUser: { user: {}, posts: [] },
  loadMore: true,
  skipItem: 0,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS_BY_USER: {
      return {
        ...state,
        loadMore: true,
        postsByUser: {
          user: action.payload.user,
          posts: [...state.postsByUser.posts, ...action.payload.posts],
          /**
           * a = [x, y, z]
           * b = [p, k, m]
           * c = [...a, ...b] = [x, y, z, p, k, m]
           */
        },
      };
    }

    case SET_POSTS_SKIP_ITEM: {
      return {
        ...state,
        skipItem: state.skipItem + SKIP_ITEM,
      };
    }

    case RESET_POSTS_SKIP_ITEM: {
      return {
        ...state,
        skipItem: 0,
      };
    }

    case RESET_POSTS_BY_USER: {
      return {
        ...state,
        postsByUser: { user: {}, posts: [] },
        loadMore: true,
      };
    }

    case CANNOT_LOAD_MORE: {
      return {
        ...state,
        loadMore: false,
      };
    }

    default:
      return { ...state };
  }
};
