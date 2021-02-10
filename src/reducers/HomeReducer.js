import { SET_HOME } from '../actoins/home';

const initHomeState = {
    title: '',
    preview: '',
};

const homeReducer = (state = initHomeState, action) => {
    switch(action.type) {
        case SET_HOME:
            return {
                ...state,
                ...action.home,
            };
        default: 
            return {
                ...state
            };
    }
};

export default homeReducer;