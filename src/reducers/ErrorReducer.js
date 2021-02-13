import {
    ADD_ERROR,
    CLEAR_ERRORS,
    SHOW_ERROR,
} from '../actoins/error';
import { search } from '../util/array';

const initErrorState = {
    array: [],
};

const errorReducer = (state = initErrorState, action) => {
    switch(action.type) {
        case ADD_ERROR:
            const newError = {
                id: state.array ? state.array.length + 1 : 1,
                showed: false,
                error: action.error,
            };
            return {
                array: [...state.array, newError]
            }
        case CLEAR_ERRORS: 
            return {
                ...initErrorState,
            };
        case SHOW_ERROR:
            const el = search(action.id, state.array);
            el.showed = true;
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
};

export default errorReducer