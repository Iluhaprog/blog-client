import { api } from './api';
import {requestWithToken} from "../utils/decorators/decorators";

const USER_URL = '/user';

export function getById(id) {
    return api.get(USER_URL, {
        params: { id },
    });
}

export function create(user) {
    return api.post(USER_URL, user, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
}

export function update(user) {
    return requestWithToken(
        (header) => api.put(USER_URL, user, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...header,
            },
        }),
    );
}

export function updatePassword(userCredentials) {
    return requestWithToken(
        (header) => api.put(`${USER_URL}/password`, userCredentials, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...header,
            },
        }),
    );
}

export function remove(id) {
    return requestWithToken(
        (headers) => api.delete(USER_URL, {
            params: { id },
            headers,
        }),
    );
}