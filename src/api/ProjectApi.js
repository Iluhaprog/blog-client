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

function getAll(page, limit) {
    return api.get(`/project/getAll/${page}/${limit}`);
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

function updatePreview(projectId, formData) {
    return api.put('/project/updatePreview', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: {
            projectId,
           dirname: process.env.REACT_APP_PREVIEWS_DIR, 
        },
    });
}

function getTotal() {
    return api.get('/project/getCount');
}

export default {
    create,
    getById,
    getAll,
    getByUserId,
    update,
    deleteById,
    getTotal,
    updatePreview,
};