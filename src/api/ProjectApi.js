import api from './api';

function getById(id) {
    return api.get('/project/getById', {
        params: { id },
    });
}

function getByUserId(userId) {
    return api.get('/project/getByUserId', {
        params: { userId },
    });
}

function getAll() {
    return api.get('/project/getAll');
}

function create(project) {
    return api.post('/project/create', { project });
}

function update(project) {
    return api.put('/project/update', { project });
}

function deleteById(id) {
    return api.delete('/project/deleteById', {
        params: { id },
    });
}

export default {
    create,
    getById,
    getAll,
    getByUserId,
    update,
    deleteById,
};