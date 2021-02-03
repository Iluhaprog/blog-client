export const SET_MODAL = 'SET_MODAL';
export const CLEAR_MODAL = 'CLEAR_MODAL';
export const SET_FAIL = 'SET_FAIL';

export const setModal = modal => ({
    type: SET_MODAL,
    modal,
});

export const clearModal = () => ({
    type: CLEAR_MODAL,
});

export const setFail = message => ({
    type: SET_FAIL,
    message,
});