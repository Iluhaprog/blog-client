import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';

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
    },
    auth: {
      username,
      password,
    },
  }).then((response) => {
    const accessTokenKey = process.env.REACT_APP_ACCESS_TOKEN_KEY;
    const refreshTokenKey = process.env.REACT_APP_REFRESH_TOKEN_KEY;
    localStorage.setItem(refreshTokenKey, response.data.refreshToken);
    localStorage.setItem(accessTokenKey, response.data.accessToken);
    return response;
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
