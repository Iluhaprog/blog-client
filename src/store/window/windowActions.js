export const ADD_WINDOW = 'ADD_WINDOW';
export const REMOVE_WINDOW = 'REMOVE_WINDOW';
export const UPDATE_WINDOW = 'UPDATE_WINDOW';

export const addWindow = (windowData) => ({
  type: ADD_WINDOW,
  windowData,
});

export const removeWindow = (id) => ({
  type: REMOVE_WINDOW,
  id,
});

export const updateWindow = (id, content) => ({
  type: UPDATE_WINDOW,
  id,
  content,
});
