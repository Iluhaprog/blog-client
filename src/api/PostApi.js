import api from './api';

export const GET_POST_BY_ID = '/post/getById';
export const GET_POST_COUNT = '/post/getCount';
export const GET_POSTS_BY_USER_ID = '/post/getByUserId';
export const GET_ALL_POSTS = '/post/getAll';
export const CREATE_POST = '/post/create';
export const SET_TAGS_TO_POST= '/post/setTags';
export const UPDATE_POST_PREVIEW = '/post/updatePreview';
export const UPDATE_POST = '/post/update';
export const DELETE_POST_BY_ID = '/post/deleteById';

function getById(id) {
    return api.get(GET_POST_BY_ID, {
        params: { id },
    });
}

function getCount() {
    return api.get(GET_POST_COUNT);
}

function getByUserId(userId) {
    return api.get(GET_POSTS_BY_USER_ID, {
        params: { userId },
    });
}

function getAll(page, limit) {
    return api.get(`${GET_ALL_POSTS}/${page}/${limit}`);
}

function create(post) {
    return api.post(CREATE_POST, { post });
}

function setTags(postId, tagsId) {
    return api.put(SET_TAGS_TO_POST, {
        postId,
        tagsId,
    });
}

function updatePreview(postId, formData) {
    return api.put(UPDATE_POST_PREVIEW, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: {
           postId,
           dirname: process.env.REACT_APP_PREVIEWS_DIR, 
        },
    });
}

function update(post) {
    return api.put(UPDATE_POST, { post });
}

function deleteById(id) {
    return api.delete(DELETE_POST_BY_ID, {
        params: { id },
    });
}

export default {
    create,
    getById,
    getAll,
    getByUserId,
    setTags,
    update,
    deleteById,
    getCount,
    updatePreview,
};