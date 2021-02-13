import ProjectApi from '../api/ProjectApi';

export const SELECT_PROJECT = 'SELECT_PROJECT';
export const CLEAR_SELECTED_PROJECT = 'CLEAR_SELECTED_PROJECT';
export const ADD_PROJECTS = 'ADD_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';
export const CLEAR_PROJECTS = 'CLEAR_PROJECTS';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const DELETE_PROJECT_FROM_ARRAY = 'DELETE_PROJECT_FROM_ARRAY';
export const SET_PROJECTS_TOTAL = 'SET_PROJECTS_TOTAL';
export const SET_PROJECT_FETCH = 'SET_PROJECT_FETCH';

export const setProjectFetch = isFetch => ({
    type: SET_PROJECT_FETCH,
    isFetch,
});
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

export const setProjectsTotal = total => ({
    type: SET_PROJECTS_TOTAL,
    total,
});

export const setProjectsTotalFetch = () => dispatch => (
    ProjectApi.getTotal().then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(setProjectsTotal(data.count));
        } 
    }).catch(error => console.error(error))
)

export const createFetch = (project, success = () => {}) => dispatch => {
    dispatch(setProjectFetch(true));
    return ProjectApi.create(project).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(addProject(data));
            success();
            dispatch(setProjectFetch(false));
        } 
    }).catch(error => console.error(error))
};
export const updateFetch = project => dispatch => {
    dispatch(setProjectFetch(true));
    return ProjectApi.update(project).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(updateProject(data));
            dispatch(setProjectFetch(false));
        }
    }).catch(error => console.error(error))
};

export const updatePreviewFetch = (projectId, formData) => dispatch => {
    dispatch(setProjectFetch(true));
    return ProjectApi.updatePreview(projectId, formData).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(updateProject(data));
            dispatch(setProjectFetch(false));
        }
    }).catch(error => console.error(error))
};

export const deleteFetch = (id, success = () => {}) => dispatch => {
    dispatch(setProjectFetch(true));
    return ProjectApi.deleteById(id).then(responce => {
        const { status } = responce;
        if (status === 204) {
            dispatch(deleteProjectById(id));
            success();
            dispatch(setProjectFetch(false));
        }
    }).catch(error => console.error(error))
};
export const getAllFetch = (page, offset) => dispatch => (
    ProjectApi.getAll(page, offset).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(addProjects(data));
        }
    }).catch(error => console.error(error))
);