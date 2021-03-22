import * as post from './postActions';
import {removeLast} from '../../utils/array';

export const initialState = {
  selected: [],
  posts: [],
  total: 0,
  isFetch: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case post.TOGGLE_POST_FETCH:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    case post.SELECT_POST:
      return {
        ...state,
        selected: action.post,
      };
    case post.ADD_POST:
      return {
        ...state,
        posts: [
          action.post,
          ...removeLast(state.posts, (arr) => {
            const maxLength = process.env.REACT_APP_PAGINATION_LIMIT;
            return arr.length >= maxLength;
          }),
        ],
      };
    case post.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.id === action.post.id ? action.post : post;
        }),
      };
    case post.FILL_POSTS_ARRAY:
      return {
        ...state,
        posts: action.posts,
      };
    case post.SET_POST_TOTAL:
      return {
        ...state,
        total: action.total,
      };
    case post.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };
    default:
      return {
        ...state,
      };
  }
};
