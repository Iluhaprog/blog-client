import api from './api';

export const GET_BY_ID = '/social/getById';
export const GET_BY_USER_ID = '/social/getByUserId';
export const CREATE_SOCIAL_LINK = '/social/create';
export const UPDATE_SOCIAL_LINK = '/social/update';
export const UPDATE_SOCIAL_LINK_PREVIEW = '/social/updatePreview';
export const DELETE_SOCIAL_LINK = '/social/deleteById';

function getById(id) {
    return api.get(GET_BY_ID, { 
        params: { id }
    });
}

function getByUserId(userId) {
    return api.get(GET_BY_USER_ID, { 
        params: { userId }
    });
}

function create(socialLink) {
    return api.post(CREATE_SOCIAL_LINK, { socialLink });
}

function update(socialLink) {
    return api.put(UPDATE_SOCIAL_LINK, { socialLink });
}

function updatePreview(socialLinkId, formData) {
    return api.put(UPDATE_SOCIAL_LINK_PREVIEW, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: {
           socialLinkId,
           dirname: process.env.REACT_APP_PREVIEWS_DIR, 
        },
    });
}

function deleteById(id) {
    return api.delete(DELETE_SOCIAL_LINK, {
        params: { id }
    });
}

export default {
    getById,
    getByUserId,
    create,
    update,
    updatePreview,
    deleteById,
};