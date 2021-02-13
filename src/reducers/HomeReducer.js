import {
    SET_HOME,
    SET_HOME_FETCH,
} from '../actoins/home';

const initHomeState = {
    title: '',
    preview: '',
    isFetch: false,
};

const homeReducer = (state = initHomeState, action) => {
    switch(action.type) {
        case SET_HOME:
            return {
                ...state,
                ...action.home,
            };
        case SET_HOME_FETCH:
            return {
                ...state,
                isFetch: action.isFetch,
            }
        default: 
            return {
                ...state
            };
    }
};

export default homeReducer;