import api from './api';

export const CREATE_COMMENT = '/comment/create';
export const GET_COMMENT_BY_ID = '/comment/getById';
export const GET_ALL_COMMENTS = '/comment/getAll';
export const GET_COMMENTS_BY_POST_ID = '/comment/getByPostId';
export const GET_COMMENT_BY_USER_ID = '/comment/getByUserId';
export const UPDATE_COMMENT = '/comment/update';
export const DELETE_COMMENT_BY_ID = '/comment/deleteById';


function create(comment) {
    return api.post(CREATE_COMMENT, { comment });
}

function getById(id) {
    return api.get(GET_COMMENT_BY_ID, {
        params: { id }
    });
}

function getAll(page, limit) {
    return api.get(`${GET_ALL_COMMENTS}/${page}/${limit}`);
}

function getByPostId(postId, page, limit) {
    return api.get(`${GET_COMMENTS_BY_POST_ID}/${page}/${limit}`, {
        params: { postId }
    });
}

function getByUserId(userId, page, limit) {
    return api.get(`${GET_COMMENT_BY_USER_ID}/${page}/${limit}`, {
        params: { userId }
    });
}

function update(comment) {
    return api.put(UPDATE_COMMENT, { comment });
}

function deleteById(id) {
    return api.delete(DELETE_COMMENT_BY_ID, {
        params: { id }
    });
}

export default {
    create,
    getById,
    getAll,
    getByPostId,
    getByUserId,
    update,
    deleteById,
};