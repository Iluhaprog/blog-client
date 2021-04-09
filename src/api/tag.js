import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';
import {Filter} from './filters';

const TAG_URL = '/tag';

/**
 * @param {string} order
 * @return {Promise<AxiosResponse<any>>}
 */
export function getAll(order = Filter.DESC) {
  return api.get(`${TAG_URL}/${order}`);
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
      (headers) => api.delete(`${TAG_URL}/${id}`, {
        headers,
      }),
  );
}
