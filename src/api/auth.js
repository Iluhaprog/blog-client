import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';
import {base64Encode} from '../utils/base64';

/**
 * @param {string} username
 * @param {string} password
 * @return {Promise<AxiosResponse<any>>}
 */
export function login(username, password) {
  return api.post('/auth/login', null, {
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${base64Encode(`${username}:${password}`)}`,
    },
  });
}

/**
 * @return {Promise<AxiosResponse<any>>}
 */
export function refreshToken() {
  return requestWithToken(
      (headers) => api.get('/auth/refresh-token', {
        headers,
        params: {
          token: localStorage.getItem(process.env.REACT_APP_REFRESH_TOKEN_KEY),
        },
      }),
  );
}

/**
 * @return {Promise<AxiosResponse<any>>}
 */
export function logout() {
  return requestWithToken(
      (headers) => api.get('/auth/logout', {
        headers,
        params: {
          token: localStorage.getItem(process.env.REACT_APP_REFRESH_TOKEN_KEY),
        },
      }),
  );
}

/**
 * @return {Promise<AxiosResponse<any>>}
 */
export function logoutAll() {
  return requestWithToken(
      (headers) => api.get('/auth/logoutAll', {
        headers,
      }),
  );
}
