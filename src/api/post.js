import {api} from './api';
import {requestWithToken} from '../utils/decorators/decorators';
import {Filter} from './filters';

const POST_URL = '/post';

/**
 * @param {number[]} tags
 * @param {number} page
 * @param {number} limit
 * @return {Promise<AxiosResponse<any>>}
 */
export function getByTags(
    tags,
    page,
    limit = process.env.REACT_APP_PAGINATION_LIMIT,
) {
  return api.post(`${POST_URL}/by-tags/${page}/${limit}`, tags, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

/**
 * @param {number} page
 * @param {number} limit
 * @param {string} order
 * @return {Promise<AxiosResponse<any>>}
 */
export function getVisible(
    page,
    limit = process.env.REACT_APP_PAGINATION_LIMIT,
    order = Filter.DESC,
) {
  return api.get(`${POST_URL}/visible/${page}/${limit}/${order}`);
}

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
  return api.get(`${POST_URL}/${page}/${limit}/${order}`);
}

/**
 * @param {number} id
 * @return {Promise<AxiosResponse<any>>}
 */
export function getById(id) {
  return api.get(`${POST_URL}/${id}`);
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
      (headers) => api.delete(`${POST_URL}/${id}`, {
        headers,
      }),
  );
}
