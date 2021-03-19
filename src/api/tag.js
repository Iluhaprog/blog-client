import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';

const TAG_URL = '/tag';

/**
 * @return {Promise<AxiosResponse<any>>}
 */
export function getAll() {
  return api.get(TAG_URL);
}

/**
 * @param {Object} tag
 * @return {Promise<AxiosResponse<any>>}
 */
export function create(tag) {
  return requestWithToken(
      (headers) => api.post(TAG_URL, tag, {
        headers,
      }),
  );
}

/**
 * @param {number} id
 * @return {Promise<AxiosResponse<any>>}
 */
export function remove(id) {
  return requestWithToken(
      (headers) => api.delete(TAG_URL, {
        params: {id},
        headers,
      }),
  );
}
