import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';
import {Filter} from './filters';

const FILE_URL = '/file';

/**
 * @param {number} page
 * @param {number} limit
 * @param {string} order
 * @return {Promise<AxiosResponse<any>>}
 */
export function getAll(
    page,
    limit = process.env.REACT_APP_PAGINATION_LIMIT,
    order = Filter.DESC,
) {
  return api.get(FILE_URL, {
    params: {page, limit, order},
  });
}

/**
 * @param {number} dirId
 * @param {string} order
 * @return {Promise<AxiosResponse<any>>}
 */
export function getByDirId(dirId, order = Filter.DESC) {
  return api.get(`${FILE_URL}/by-dir`, {
    params: {
      dirId,
      order,
    },
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
