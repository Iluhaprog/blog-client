import api from './api';

export const GET_LIKE_BY_ID = '/like/getById';
export const GET_LIKE_COUNT = '/like/getCount';
export const GET_ALL_LIKES = '/like/getAll';
export const GET_LIKES_BY_USER_ID = '/like/getByUserId';
export const GET_LIKES_BY_POST_ID= '/like/getByPostId';
export const CREATE_LIKE = '/like/create';
export const DELETE_LIKE_BY_ID = '/like/deleteById';

function getById(id) {
    return api.get(GET_LIKE_BY_ID, {
        params: { id },
    });
}

function getCount() {
    return api.get(GET_LIKE_COUNT);
}

function getAll() {
    return api.get(GET_ALL_LIKES);
}

function getByUserId(userId) {
    return api.get(GET_LIKES_BY_USER_ID, {
        params: { userId },
    });
}

function getByPostId(postId) {
    return api.get(GET_LIKES_BY_POST_ID, {
        params: { postId },
    });
}

function create(like) {
    return api.post(CREATE_LIKE, { like });
}

function deleteById(id) {
    return api.delete(DELETE_LIKE_BY_ID, {
        params: { id },
    });
}

export default { 
    getById,
    getByPostId,
    getByUserId,
    getAll,
    create,
    deleteById,
    getCount,
};