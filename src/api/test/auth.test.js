import MockAdapter from 'axios-mock-adapter';
import {api} from '../api';
import * as auth from '../auth';
import {base64Encode} from '../../utils/base64';
import {HttpStatus} from '../status';

describe('Auth api module', () => {
  const mock = new MockAdapter(api);
  const API_URL = process.env.REACT_APP_API_URL;

  test('/auth/login (POST)', async () => {
    const answer = {
      accessToken: 'TEST_ACCESS_TOKEN',
      refreshToken: 'TEST_REFRESH_TOKEN',
    };
    const username = 'TEST_USERNAME';
    const password = 'TEST_PASSWORD';
    const token = base64Encode(`${username}:${password}`);
    mock.onPost(`${API_URL}/auth/login`).reply((config) => {
      expect(config.headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.OK, answer];
    });

    const {status, data} = await auth.login(username, password);

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual(answer);
  });

  test('/auth/refresh-token (GET)', async () => {
    const token = 'TEST_ACCESS_TOKEN';
    const answer = {
      accessToken: 'TEST_ACCESS_TOKEN',
      refreshToken: 'TEST_REFRESH_TOKEN',
    };
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
    mock.onGet(`${API_URL}/auth/refresh-token`).reply((config) => {
      expect(config.headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.OK, answer];
    });

    const {status, data} = await auth.refreshToken();

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual(answer);
  });

  test('/auth/logout (GET)', async () => {
    const token = 'TEST_ACCESS_TOKEN';
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
    mock.onGet(`${API_URL}/auth/logout`).reply((config) => {
      expect(config.headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.OK];
    });

    const {status} = await auth.logout();

    expect(status).toBe(HttpStatus.OK);
  });

  test('/auth/logoutAll (GET)', async () => {
    const token = 'TEST_ACCESS_TOKEN';
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
    mock.onGet(`${API_URL}/auth/logoutAll`).reply((config) => {
      expect(config.headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.OK];
    });

    const {status} = await auth.logoutAll();

    expect(status).toBe(HttpStatus.OK);
  });
});
