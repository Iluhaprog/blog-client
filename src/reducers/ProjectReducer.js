import * as array from '../util/array';

import {
    SELECT_PROJECT,
    CLEAR_SELECTED_PROJECT,
    ADD_PROJECTS,
    ADD_PROJECT,
    CLEAR_PROJECTS,
    UPDATE_PROJECT,
    DELETE_PROJECT_FROM_ARRAY,
    SET_PROJECTS_TOTAL,
} from '../actoins/project';

const initProjectState = {
    selected: {
        title: '',
        description: '',
        preview: '',
        projectLink: '',
        githubLink: '',
    },
    array: [],
    total: 0,
};

const projectReducer = (state = initProjectState, action) => {
    switch(action.type) {
        case SELECT_PROJECT :
            const project = array.search(action.id, state.array);
            return {
                ...state,
                selected: project,
            };
        case SET_PROJECTS_TOTAL:
            return {
                ...state,
                total: action.total,
            };
        case CLEAR_SELECTED_PROJECT:
            return {
                ...state,
                selected: {...initProjectState.selected},
            };
        case ADD_PROJECTS:
            return {
                ...state,
                array: action.projects,
            };
        case ADD_PROJECT:
            return {
                ...state,
                array: [...state.array, action.project],
            };
        case CLEAR_PROJECTS:
            return {
                ...state, 
                array: [],
            };
        case UPDATE_PROJECT:
            return {
                selected: action.project,
                array: array.replace(action.project, state.array),
            };
        case DELETE_PROJECT_FROM_ARRAY:
            return {
                ...state,
                array: array.deleteEl(action.id, state.array),
            };
        default:
            return state;
    }
}

export default projectReducer;

