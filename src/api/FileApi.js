import api from './api';

export const CREATE_FILE = '/file/create';
export const GET_FILE_BY_ID = '/file/getById';
export const GET_FILE_BY_NAME = '/file/getByName';
export const GET_FILE_BY_DIRECTORY_ID = '/file/getByDirectoryId';
export const UPDATE_FILE = '/file/update';
export const DELETE_FILE_BY_ID = '/file/deleteById';


function create(dirname, formData) {
    return api.post(CREATE_FILE, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: {
            dirname,
        },
    });
}

function getById(id) {
    return api.get(GET_FILE_BY_ID, {
        params: { id }
    });
}

function getByName(name) {
    return api.get(`${GET_FILE_BY_NAME}/${name}`);
}

function getByDirectoryId(directoryId) {
    return api.get('/file/getByDirectoryId', {
        params: { directoryId }
    });
}

function update(file) {
    return api.put(UPDATE_FILE, { file });
}

function deleteById(id) {
    return api.delete(DELETE_FILE_BY_ID, {
        params: { id }
    });
}

export default {
    create,
    getById,
    getByName,
    getByDirectoryId,
    update,
    deleteById,
};