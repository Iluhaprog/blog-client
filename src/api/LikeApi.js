import api from './api';

function getById(id) {
    return api.get('/like/getById', {
        params: { id },
    });
}

function getCount() {
    return api.get('/like/getCount');
}

function getAll() {
    return api.get('/like/getAll');
}

function getByUserId(userId) {
    return api.get('/like/getByUserId', {
        params: { userId },
    });
}

function getByPostId(postId) {
    return api.get('/like/getByPostId', {
        params: { postId },
    });
}

function create(like) {
    return api.post('/like/create', { like });
}

function deleteById(id) {
    return api.delete('/like/deleteById', {
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