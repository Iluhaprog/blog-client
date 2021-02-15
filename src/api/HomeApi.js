import api from './api';

export const GET_HOME = '/home/get';
export const UPDATE_HOME = '/home/update';
export const UPDATE_HOME_PREVIEW = '/home/updatePreview';

function get() {
    return api.get(GET_HOME);
}

function update(home) {
    return api.put(UPDATE_HOME, { home });
}

function updatePreview(formData) {
    return api.put(UPDATE_HOME_PREVIEW, formData, {
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