import MockAdapter from 'axios-mock-adapter';
import {api} from '../api';
import {HttpStatus} from '../status';
import * as user from '../user';

describe('User api module', () => {
  let mock;
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    mock = new MockAdapter(api);
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('/user (GET)', async () => {
    const userData = {id: 1};
    mock.onGet(`/user`).reply(HttpStatus.OK, [userData]);

    const {status, data} = await user.getAll();

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual([userData]);
  });

  test('/user/{id} (GET)', async () => {
    const id = 1;
    const userData = {id: 1};
    mock.onGet(`/user`, {
      params: {id},
    }).reply(HttpStatus.OK, userData);

    const {status, data} = await user.getById(id);

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual(userData);
  });

  test('/user (POST)', async () => {
    const newUser = {login: 'test'};
    mock.onPost('/user', newUser, {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }).reply(HttpStatus.CREATED, newUser);

    const {status, data} = await user.create(newUser);

    expect(data).toEqual(newUser);
    expect(status).toBe(HttpStatus.CREATED);
  });

  test('/user (PUT)', async () => {
    const updatedUser = {login: 'test'};
    mock.onPut('/user').reply((config) => {
      const {headers, data} = config;
      expect(headers['Accept']).toBe('application/json');
      expect(headers['Content-Type']).toBe('application/json');
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toEqual(JSON.stringify(updatedUser));
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await user.update(updatedUser);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });

  test('/user/password (PUT)', async () => {
    const creds = {newPassword: 'test'};
    mock.onPut('/user/password').reply((config) => {
      const {headers, data} = config;
      expect(headers['Accept']).toBe('application/json');
      expect(headers['Content-Type']).toBe('application/json');
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toEqual(JSON.stringify(creds));
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await user.updatePassword(creds);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });

  test('/user (DELETE)', async () => {
    const id = 1;
    mock.onDelete('/user').reply((config) => {
      const {headers, params} = config;
      expect(params.id).toBe(id);
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await user.remove(id);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });
});
