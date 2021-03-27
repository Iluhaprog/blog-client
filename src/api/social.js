import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';
import {Filter} from './filters';

const SOCIAL_URL = '/social';

/**
 * @param {string} order
 * @return {Promise<AxiosResponse<any>>}
 */
export function getAll(order = Filter.DESC) {
  return api.get(`${SOCIAL_URL}/${order}`);
}

/**
 * @param {Object} social
 * @return {Promise<AxiosResponse<any>>}
 */
export function create(social) {
  return requestWithToken(
      (headers) => api.post(SOCIAL_URL, social, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
      }),
  );
}

/**
 * @param {Object} social
 * @return {Promise<AxiosResponse<any>>}
 */
export function update(social) {
  return requestWithToken(
      (headers) => api.put(SOCIAL_URL, social, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
      }),
  );
}

/**
 * @param {number} id
 * @return {Promise<AxiosResponse<any>>}
 */
export function remove(id) {
  return requestWithToken(
      (headers) => api.delete(`${SOCIAL_URL}/${id}`, {
        headers,
      }),
  );
}
