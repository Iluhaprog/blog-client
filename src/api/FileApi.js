import api from './api';

function create(dirname, formData) {
    return api.post('/file/create', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: {
            dirname,
        },
    });
}

function getById(id) {
    return api.get('/file/getById', {
        params: { id }
    });
}

function getByName(name) {
    return api.get(`/file/getByName/${name}`);
}

function getByPostId(postId) {
    return api.get('/file/getByPostId', {
        params: { postId }
    });
}

function update(file) {
    return api.put('/file/update', { file });
}

function deleteById(id) {
    return api.delete('/file/deleteById', {
        params: { id }
    });
}

export default {
    create,
    getById,
    getByName,
    getByPostId,
    update,
    deleteById,
};