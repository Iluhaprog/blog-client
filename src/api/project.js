import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';

const PROJECT_URL = '/project';

/**
 * @return {Promise<AxiosResponse<any>>}
 */
export function getAll() {
  return api.get(PROJECT_URL);
}

/**
 * @param {Object} project
 * @return {Promise<AxiosResponse<any>>}
 */
export function create(project) {
  return requestWithToken(
      (headers) => api.post(PROJECT_URL, project, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
      }),
  );
}

/**
 * @param {Object} project
 * @return {Promise<AxiosResponse<any>>}
 */
export function update(project) {
  return requestWithToken(
      (headers) => api.put(PROJECT_URL, project, {
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
      (headers) => api.delete(PROJECT_URL, {
        params: {id},
        headers,
      }),
  );
}
