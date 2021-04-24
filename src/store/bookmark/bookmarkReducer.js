import * as bookmark from './bookmarkActions';
import {v4 as uuidv4} from 'uuid';

export const initState = {
  bookmarks: [],
  isView: true,
};

export const bookmarkReducer = (state = initState, action) => {
  switch (action.type) {
    case bookmark.TOGGLE_VIEW:
      return {
        ...state,
        isView: !state.isView,
      };
    case bookmark.ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [
          {
            id: uuidv4(),
            data: action.data,
          },
          ...state.bookmarks,
        ],
      };
    case bookmark.REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter((bookmark) => {
          return bookmark.id !== action.id;
        }),
      };
    default:
      return {
        ...state,
      };
  }
};
