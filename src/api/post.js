import { api } from './api';
import {requestWithToken} from "../utils/decorators/decorators";

const POST_URL = '/post';

export function getByTags(tags) {
    return api.post(`${POST_URL}/by-tags`, tags, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
}

export function getAll(page, limit = process.env.REACT_APP_PAGINATION_LIMIT) {
    return api.get(POST_URL, {
        params: { page, limit },
    });
}

export function getById(id) {
    return api.get(POST_URL, {
        params: { id },
    });
}

export function getLast() {
    return api.get(POST_URL);
}

export function create(post) {
    return requestWithToken(
        (headers) => api.post(POST_URL, post, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers,
            },
        }),
    );
}

export function update(post) {
    return requestWithToken(
        (headers) => api.put(POST_URL, post, {
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
        (headers) => api.delete(POST_URL, {
            params: { id },
            headers,
        }),
    );
}