import { api } from './api';
import {requestWithToken} from "../utils/decorators/decorators";

const TAG_URL = '/tag';

export function getAll() {
    return api.get(TAG_URL);
}

export function create(tag) {
    return requestWithToken(
        (headers) => api.post(TAG_URL, tag, {
            headers,
        }),
    );
}

export function remove(id) {
    return requestWithToken(
        (headers) => api.delete(TAG_URL, {
            params: { id },
            headers,
        }),
    );
}