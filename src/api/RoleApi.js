import api from './api';

function create(role) {
    return api.post('/role/create', { role });
}

function getById(id) {
    return api.get('/role/getById', {
        params: { id },
    });
}

function deleteById(id) {
    return api.delete('/role/deleteById', {
        params: { id },
    });
}

export default {
    create,
    getById,
    deleteById,
};