import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';

const FILE_URL = '/file';

/**
 * @param {number} page
 * @param {number} limit
 * @return {Promise<AxiosResponse<any>>}
 */
export function getAll(page, limit = process.env.REACT_APP_PAGINATION_LIMIT) {
  return api.get(FILE_URL, {
    params: {page, limit},
  });
}

/**
 * @param {FormData} formData
 * @param {number} dirId
 * @return {Promise<AxiosResponse<any>>}
 */
export function create(formData, dirId) {
  return requestWithToken(
      (headers) => api.post(FILE_URL, formData, {
        params: {dir: dirId},
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
      (headers) => api.delete(FILE_URL, {
        params: {id},
        headers,
      }),
  );
}
