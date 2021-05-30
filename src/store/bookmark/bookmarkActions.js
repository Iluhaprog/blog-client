export const SET_VIEW = 'SET_VIEW';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const VIEW = 'VIEW';

export const view = () => ({
  type: VIEW,
});

export const addBookmark = (data) => ({
  type: ADD_BOOKMARK,
  data,
});

export const removeBookmark = (id) => ({
  type: REMOVE_BOOKMARK,
  id,
});


