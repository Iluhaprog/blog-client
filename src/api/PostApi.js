import api from './api';

function getById(id) {
    return api.get('/post/getById', {
        params: { id },
    });
}

function getCount() {
    return api.get('/post/getCount');
}

function getByUserId(userId) {
    return api.get('/post/getByUserId', {
        params: { userId },
    });
}

function getAll(page, limit) {
    return api.get(`/post/getAll/${page}/${limit}`);
}

function create(post) {
    return api.post('/post/create', { post });
}

function setTags(postId, tagsId) {
    return api.put('/post/setTags', {
        postId,
        tagsId,
    });
}

function updatePreview(postId, formData) {
    return api.put('/post/updatePreview', formData, {
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
    return api.put('/post/update', { post });
}

function deleteById(id) {
    return api.delete('/post/deleteById', {
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