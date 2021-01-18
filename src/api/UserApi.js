import api from  './api';
import { base64Encode } from '../util/base64';

function login(username, password) {
    const token = base64Encode(`${username}:${password}`);
    return api.post('/user/login', {}, {
        headers: {
            'Authorization': `Bearer ${token}`,
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
    remove,
    deleteById,
};