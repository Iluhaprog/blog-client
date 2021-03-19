import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';

const SOCIAL_URL = '/social';

/**
 * @return {Promise<AxiosResponse<any>>}
 */
export function getAll() {
  return api.get(SOCIAL_URL);
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
      (headers) => api.delete(SOCIAL_URL, {
        params: {id},
        headers,
      }),
  );
}
