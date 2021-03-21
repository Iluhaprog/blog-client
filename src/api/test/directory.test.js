import MockAdapter from 'axios-mock-adapter';
import {api} from '../api';
import {HttpStatus} from '../status';
import * as dir from '../directory';

describe('File api module', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('/directory/{page}/{limit} (GET)', async () => {
    const dirData = {name: 'TEST_DIR_NAME'};
    const page = 1;
    const limit = process.env.REACT_APP_PAGINATION_LIMIT;
    mock.onGet('/directory', {
      params: {page, limit},
    }).reply(HttpStatus.OK, [dirData]);

    const {status, data} = await dir.getAll(page);

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual([dirData]);
  });

  test('/directory (POST)', async () => {
    const dirData = {name: 'TEST_DIR_NAME'};
    const dirResult = {id: 1, ...dirData};
    mock.onPost('/directory').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(dirData));
      return [HttpStatus.CREATED, dirResult];
    });

    const {status, data} = await dir.create(dirData);

    expect(data).toEqual(dirResult);
    expect(status).toBe(HttpStatus.CREATED);
  });

  test('/directory (DELETE)', async () => {
    const id = 1;
    mock.onDelete('/directory').reply((config) => {
      const {headers, params} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(params.id).toEqual(id);
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await dir.remove(id);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });
});
