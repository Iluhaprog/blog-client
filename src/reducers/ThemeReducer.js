import { SET_THEME } from '../actoins/theme';

const initThemeState = {
    theme: 'light'
};

const themeReducer = (state = initThemeState, action) => {
    switch(action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.theme,
            };
        default: 
            return {
                ...state
            };
    }
};

export default themeReducer;