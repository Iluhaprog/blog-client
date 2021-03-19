import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';

const POST_URL = '/post';

/**
 * @param {number[]} tags
 * @return {Promise<AxiosResponse<any>>}
 */
export function getByTags(tags) {
  return api.post(`${POST_URL}/by-tags`, tags, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

/**
 * @param {number} page
 * @param {number} limit
 * @return {Promise<AxiosResponse<any>>}
 */
export function getAll(page, limit = process.env.REACT_APP_PAGINATION_LIMIT) {
  return api.get(POST_URL, {
    params: {page, limit},
  });
}

/**
 * @param {number} id
 * @return {Promise<AxiosResponse<any>>}
 */
export function getById(id) {
  return api.get(POST_URL, {
    params: {id},
  });
}

/**
 * @return {Promise<AxiosResponse<any>>}
 */
export function getLast() {
  return api.get(POST_URL);
}

/**
 * @param {Object} post
 * @return {Promise<AxiosResponse<any>>}
 */
export function create(post) {
  return requestWithToken(
      (headers) => api.post(POST_URL, post, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
      }),
  );
}

/**
 * @param {Object} post
 * @return {Promise<AxiosResponse<any>>}
 */
export function update(post) {
  return requestWithToken(
      (headers) => api.put(POST_URL, post, {
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
      (headers) => api.delete(POST_URL, {
        params: {id},
        headers,
      }),
  );
}
