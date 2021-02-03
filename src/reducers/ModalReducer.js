import {
    SET_FAIL,
    SET_MODAL,
    CLEAR_MODAL
} from '../actoins/modal';

const initModalState = {
    text: '',
    withInput: false,
    handleSuccess: () => {},
    visible: false,
    fail: {},
};

const modalReducer = (state = initModalState, action) => {
    switch(action.type) {
        case SET_FAIL:
            return {
                ...state,
                fail: {
                    message: action.message,
                }
            };
        case SET_MODAL:
            return {
                ...state,
                ...action.modal,
            };
        case CLEAR_MODAL: 
            return {
                ...initModalState,
            };
        default:
            return state;
    }
};

export default modalReducer;