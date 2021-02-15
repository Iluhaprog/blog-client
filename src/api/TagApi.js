import api from './api';

export const CREATE_TAG = '/tag/create';
export const GET_TAG_BY_ID= '/tag/getById';
export const GET_TAGS_BY_POST_ID = '/tag/getByPostId';
export const GET_ALL_TAGS = '/tag/getAll';
export const DELETE_TAGS_BY_ID = '/tag/deleteById';

function create(tag) {
    return api.post(CREATE_TAG, { tag });
}

function getById(id) {
    return api.get(GET_TAG_BY_ID, {
        params: { id },
    });
}

function getByPostId(postId) {
    return api.get(GET_TAGS_BY_POST_ID, {
        params: { postId },
    });
}

function getAll() {
    return api.get(GET_ALL_TAGS);
}

function deleteById(id) {
    return api.delete(DELETE_TAGS_BY_ID, {
        params: { id },
    });
}

export default {
    create,
    getById,
    getByPostId,
    deleteById,
    getAll,
};