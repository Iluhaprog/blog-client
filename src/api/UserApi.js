import api from  './api';

function login(username, password) {
    return api.post('/user/login', {}, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        auth: {
            username,
            password,
        },
    });
}

function logout() {
    return api.post('/user/logout');
}

function getById(id) {
    return api.get('/user/getById', {
        params: { id },
    });
}


function getAll() {
    return api.get('/user/getAll');
}


function getByEmail(email) {
    return api.get('/user/getByEmail', {
        params: { email }
    });
}


function getByUsername(username) {
    return api.get('/user/getByUsername', {
        params: { username }
    });
}


function create(user) {
    return api.post('/user/create', { user });
}


function verify(code) {
    const url = `/user/verify/${code}`;
    return api.get(url);
}


function update(user) {
    return api.put('/user/update', { user });
}


function updateAvatar(dirname, formData) {
    return api.put('/user/updateAvatar', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: {
            dirname,
        },
    });
}

function remove() {
    return api.delete('/user/remove');
}


function deleteById(id) {
    return api.delete('/user/deleteById', {
        params: { id },
    });
}

export default {
    login,
    logout,
    getById,
    getAll,
    getByEmail,
    getByUsername,
    create,
    verify,
    update,
    updateAvatar,
    remove,
    deleteById,
};