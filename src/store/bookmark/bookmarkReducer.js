import * as bookmark from './bookmarkActions';
import {v4 as uuidv4} from 'uuid';

export const initState = {
  bookmarks: [],
  isView: true,
  unviewedBookmarksNumber: 0,
};

const isUnique = (posts, id) => {
  return !posts.find((item) => item.data.id === id);
};

export const bookmarkReducer = (state = initState, action) => {
  switch (action.type) {
    case bookmark.VIEW:
      return {
        ...state,
        unviewedBookmarksNumber: 0,
      };
    case bookmark.SET_VIEW:
      return {
        ...state,
        isView: action.isView,
      };
    case bookmark.ADD_BOOKMARK:
      return {
        ...state,
        unviewedBookmarksNumber: isUnique(state.bookmarks, action.data.id) ?
          ++state.unviewedBookmarksNumber :
          state.unviewedBookmarksNumber,
        bookmarks: isUnique(state.bookmarks, action.data.id) ? [
          {
            id: uuidv4(),
            data: action.data,
          },
          ...state.bookmarks,
        ] : [...state.bookmarks],
      };
    case bookmark.REMOVE_BOOKMARK:
      return {
        ...state,
        unviewedBookmarksNumber: --state.unviewedBookmarksNumber,
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
