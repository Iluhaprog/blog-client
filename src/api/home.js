import { api } from './api';
import {requestWithToken} from "../utils/decorators/decorators";

const HOME_URL = '/home';

export function getAll() {
    return api.get(HOME_URL);
}

export function getOne() {
    return api.get(`${HOME_URL}/one`);
}

export function create(home) {
    return requestWithToken(
        (headers) => api.post(HOME_URL, home, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers,
            },
        }),
    );
}

export function update(home) {
    return requestWithToken(
        (headers) => api.put(HOME_URL, home, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers,
            },
        }),
    );
}

export function remove(id) {
    return requestWithToken(
        (headers) => api.delete(HOME_URL, {
            params: { id },
            headers,
        }),
    );
}