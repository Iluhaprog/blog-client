import api from './api';

function create(comment) {
    return api.post('/comment/create', { comment });
}

function getById(id) {
    return api.get('/comment/getById', {
        params: { id }
    });
}

function getAll(page, limit) {
    return api.get(`/comment/getAll/${page}/${limit}`);
}

function getByPostId(postId) {
    return api.get('/comment/getByPostId', {
        params: { postId }
    });
}

function getByUserId(userId) {
    return api.get('/comment/getByUserId', {
        params: { userId }
    });
}

function update(comment) {
    return api.put('/comment/update', { comment });
}

function deleteById(id) {
    return api.delete('/comment/deleteById', {
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