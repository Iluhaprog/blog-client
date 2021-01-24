import ProjectApi from '../api/ProjectApi';
import * as array from '../util/array';

const initProjectState = {
    selected: {
        title: '',
        description: '',
        preview: '',
        projectLink: '',
        githubLink: '',
    },
    array: [],
};

const SELECT_PROJECT = 'SELECT_PROJECT';
const CLEAR_SELECTED_PROJECT = 'CLEAR_SELECTED_PROJECT';
const ADD_PROJECTS = 'ADD_PROJECTS';
const ADD_PROJECT = 'ADD_PROJECT';
const CLEAR_PROJECTS = 'CLEAR_PROJECTS';
const UPDATE_PROJECT = 'UPDATE_PROJECT';
const DELETE_PROJECT_FROM_ARRAY = 'DELETE_PROJECT_FROM_ARRAY';

const projectReducer = (state = initProjectState, action) => {
    switch(action.type) {
        case SELECT_PROJECT :
            const project = array.search(action.id, state.array);
            return {
                ...state,
                selected: project,
            };
        case CLEAR_SELECTED_PROJECT:
            return {
                ...state,
                selected: {...initProjectState.selected},
            };
        case ADD_PROJECTS:
            return {
                ...state,
                array: array.concat(state.array, action.projects),
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

export const selectProjectById = id => ({ 
    type: SELECT_PROJECT,
    id,
});
export const clearSelectedProject = () => ({ 
    type: CLEAR_SELECTED_PROJECT,
});
export const addProjects = projects => ({ 
    type: ADD_PROJECTS,
    projects,
});
export const addProject = project => ({ 
    type: ADD_PROJECT,
    project,
});
export const clearProjects = () => ({ 
    type: CLEAR_PROJECTS,
});

export const updateProject = project => ({
    type: UPDATE_PROJECT,
    project,
});

export const deleteProjectById = id => ({
    type: DELETE_PROJECT_FROM_ARRAY,
    id,
});

export const createFetch = project => dispatch => (
    ProjectApi.create(project).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(addProject(data));
        } 
    }).catch(error => console.error(error))
);
export const updateFetch = project => dispatch => (
    ProjectApi.update(project).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(updateProject(data));
        }
    }).catch(error => console.error(error))
);
export const deleteFetch = id => dispatch => (
    ProjectApi.deleteById(id).then(responce => {
        const { status } = responce;
        if (status === 204) {
            dispatch(deleteProjectById(id));
        }
    }).catch(error => console.error(error))
);
export const getAllFetch = () => dispatch => (
    ProjectApi.getAll().then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(addProjects(data));
        }
    }).catch(error => console.error(error))
);

export default projectReducer;

