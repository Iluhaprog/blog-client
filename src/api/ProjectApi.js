import api from './api';

export const GET_PROJECT_BY_ID = '/project/getById';
export const GET_PROJECT_BY_USER_ID = '/project/getByUserId';
export const GET_ALL_PROJECTS = '/project/getAll';
export const CREATE_PROJECT = '/project/create';
export const UPDATE_PROJECT = '/project/update';
export const UPDATE_PROJECT_PREVIEW = '/project/updatePreview';
export const DELETE_PROJECT_BY_ID = '/project/deleteById';
export const GET_PROJECTS_COUNT = '/project/getCount';

function getById(id) {
    return api.get(GET_PROJECT_BY_ID, {
        params: { id },
    });
}

function getByUserId(userId) {
    return api.get(GET_PROJECT_BY_USER_ID, {
        params: { userId },
    });
}

function getAll(page, limit) {
    return api.get(`${GET_ALL_PROJECTS}/${page}/${limit}`);
}

function create(project) {
    return api.post(CREATE_PROJECT, { project });
}

function update(project) {
    return api.put(UPDATE_PROJECT, { project });
}

function deleteById(id) {
    return api.delete(DELETE_PROJECT_BY_ID, {
        params: { id },
    });
}

function updatePreview(projectId, formData) {
    return api.put(UPDATE_PROJECT_PREVIEW, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: {
            projectId,
           dirname: process.env.REACT_APP_PREVIEWS_DIR, 
        },
    });
}

function getTotal() {
    return api.get(GET_PROJECTS_COUNT);
}

export default {
    create,
    getById,
    getAll,
    getByUserId,
    update,
    deleteById,
    getTotal,
    updatePreview,
};