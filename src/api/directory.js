import { api } from './api';
import {requestWithToken} from "../utils/decorators/decorators";

const DIR_URL = '/directory';

export function getAll(page, limit = process.env.REACT_APP_PAGINATION_LIMIT) {
    return api.get(DIR_URL, {
        params: { page, limit },
    });
}

export function create(dir) {
    return requestWithToken(
        (headers) => api.post(DIR_URL, dir, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers,
            }
        }),
    );
}

export function remove(id) {
    return requestWithToken(
        (headers) => api.delete(DIR_URL,{
            params: { id },
            headers,
        }),
    );
}