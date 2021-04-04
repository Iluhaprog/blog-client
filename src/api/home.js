import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';

const HOME_URL = '/home';

/**
 * @return {Promise<AxiosResponse<any>>}
 */
export function getAll() {
  return api.get(HOME_URL);
}

/**
 * @return {Promise<AxiosResponse<any>>}
 */
export function getOne() {
  return api.get(`${HOME_URL}/one`);
}

/**
 * @param {Object} home
 * @return {Promise<AxiosResponse<any>>}
 */
export function create(home) {
  return requestWithToken(
      (headers) => api.post(HOME_URL, home, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
      }),
  );
}

/**
 * @param {Object} home
 * @return {Promise<AxiosResponse<any>>}
 */
export function update(home) {
  return requestWithToken(
      (headers) => api.put(HOME_URL, home, {
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
      (headers) => api.delete(`${HOME_URL}/${id}`, {
        headers,
      }),
  );
}
