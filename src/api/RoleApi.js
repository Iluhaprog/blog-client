import api from './api';

export const CREATE_ROLE = '/role/create';
export const GET_ROLE_BY_ID = '/role/getById';
export const DELETE_ROLE_BY_ID = '/role/deleteById';

function create(role) {
    return api.post(CREATE_ROLE, { role });
}

function getById(id) {
    return api.get(GET_ROLE_BY_ID, {
        params: { id },
    });
}

function deleteById(id) {
    return api.delete(DELETE_ROLE_BY_ID, {
        params: { id },
    });
}

export default {
    create,
    getById,
    deleteById,
};