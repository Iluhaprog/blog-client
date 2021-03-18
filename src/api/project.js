import { api } from './api';
import {requestWithToken} from "../utils/decorators/decorators";

const PROJECT_URL = '/project';

export function getAll() {
    return api.get(PROJECT_URL);
}

export function create(project) {
    return requestWithToken(
        (headers) => api.post(PROJECT_URL, project, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers,
            },
        }),
    );
}

export function update(project) {
    return requestWithToken(
        (headers) => api.put(PROJECT_URL, project, {
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
        (headers) => api.delete(PROJECT_URL, {
            params: { id },
            headers,
        }),
    );
}