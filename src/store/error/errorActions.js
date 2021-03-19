export const ADD_ERROR = 'ADD_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';
export const REMOVE_ALL_ERRORS = 'REMOVE_ALL_ERRORS';

export const addError = (error) => ({
  type: ADD_ERROR,
  error,
});

export const removeError = (id) => ({
  type: REMOVE_ERROR,
  id,
});

export const removeAllErrors = () => ({
  type: REMOVE_ALL_ERRORS,
});
