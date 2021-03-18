import { api } from './api';
import {requestWithToken} from "../utils/decorators/decorators";

const FILE_URL = '/file';

export function getAll(page, limit = process.env.REACT_APP_PAGINATION_LIMIT) {
    return api.get(FILE_URL, {
        params: { page, limit },
    });
}

export function create(formData, dir) {
    return requestWithToken(
        (headers) => api.post(FILE_URL, formData, {
            params: { dir },
            headers,
        }),
    );
}

export function remove(id) {
    return requestWithToken(
        (headers) => api.delete(FILE_URL,{
            params: { id },
            headers,
        }),
    );
}