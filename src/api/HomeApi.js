import api from './api';

function get() {
    return api.get('/home/get');
}

function update(home) {
    return api.put('/home/update', { home });
}

function updatePreview(formData) {
    return api.put(`/home/updatePreview`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: {
           dirname: process.env.REACT_APP_HOME_DIR, 
        },
    });
}

export default {
    get,
    update,
    updatePreview,
};