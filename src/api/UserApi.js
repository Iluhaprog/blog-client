import api from  './api';

export const LOGIN = '/user/login';
export const LOGOUT = '/user/logout';
export const GET_USER_BY_ID = '/user/getById';
export const GET_ALL_USERS = '/user/getAll';
export const GET_USER_BY_EMAIL = '/user/getByEmail';
export const GET_USER_BY_USERNAME = '/user/getByUsername';
export const CREATE_USER = '/user/create';
export const VERIFY = '/user/verify';
export const UPDATE_USER = '/user/update';
export const UPDATE_AVATAR= '/user/updateAvatar';
export const REMOVE_USER = '/user/remove';
export const DELETE_USER_BY_ID = '/user/deleteById';

function login(username, password) {
    return api.post(LOGIN, {}, {
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
    return api.post(LOGOUT);
}

function getById(id) {
    return api.get(GET_USER_BY_ID, {
        params: { id },
    });
}


function getAll() {
    return api.get(GET_ALL_USERS);
}


function getByEmail(email) {
    return api.get(GET_USER_BY_EMAIL, {
        params: { email }
    });
}


function getByUsername(username) {
    return api.get(GET_USER_BY_USERNAME, {
        params: { username }
    });
}


function create(user) {
    return api.post(CREATE_USER, { user });
}


function verify(code) {
    const url = `${VERIFY}/${code}`;
    return api.get(url);
}


function update(user) {
    return api.put(UPDATE_USER, { user });
}


function updateAvatar(dirname, formData) {
    return api.put(UPDATE_AVATAR, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: {
            dirname,
        },
    });
}

function remove() {
    return api.delete(REMOVE_USER);
}


function deleteById(id) {
    return api.delete(DELETE_USER_BY_ID, {
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