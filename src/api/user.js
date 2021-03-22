import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';

const USER_URL = '/user';

/**
 * @return {Promise<AxiosResponse<any>>}
 */
export function getAll() {
  return api.get(USER_URL);
}

/**
 * @param {number} id
 * @return {Promise<AxiosResponse<any>>}
 */
export function getById(id) {
  return api.get(USER_URL, {
    params: {id},
  });
}

/**
 * @param {Object} user
 * @return {Promise<AxiosResponse<any>>}
 */
export function create(user) {
  return api.post(USER_URL, user, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
}


/**
 * @param {Object} user
 * @return {Promise<AxiosResponse<any>>}
 */
export function update(user) {
  return requestWithToken(
      (header) => api.put(USER_URL, user, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...header,
        },
      }),
  );
}


/**
 * @param {Object} userCredentials
 * @return {Promise<AxiosResponse<any>>}
 */
export function updatePassword(userCredentials) {
  return requestWithToken(
      (header) => api.put(`${USER_URL}/password`, userCredentials, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...header,
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
      (headers) => api.delete(USER_URL, {
        params: {id},
        headers,
      }),
  );
}
