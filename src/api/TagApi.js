import api from './api';

function create(tag) {
    return api.post('/tag/create', { tag });
}

function getById(id) {
    return api.get('/tag/getById', {
        params: { id },
    });
}

function getByPostId(postId) {
    return api.get('/tag/getByPostId', {
        params: { postId },
    });
}

function getAll() {
    return api.get('/tag/getAll');
}

function deleteById(id) {
    return api.delete('/tag/deleteById', {
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