export const ADD_ERROR = 'ADD_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const SHOW_ERROR = 'SHOW_ERROR';

export const addError = error => ({
    type: ADD_ERROR,
    error,
});

export const clearErrors = () => ({ type: CLEAR_ERRORS });

export const showError = id => ({
    type: SHOW_ERROR,
    id,
});