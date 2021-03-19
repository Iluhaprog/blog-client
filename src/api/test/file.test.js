import MockAdapter from 'axios-mock-adapter';
import {api} from '../api';
import {HttpStatus} from '../status';
import * as file from '../file';

describe('File api module', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('/file/{page}/{limit} (GET)', async () => {
    const fileData = {name: 'TEST_FILE_NAME'};
    const page = 1;
    const limit = process.env.REACT_APP_PAGINATION_LIMIT;
    mock.onGet('/file', {
      params: {page, limit},
    }).reply(HttpStatus.OK, [fileData]);

    const {status, data} = await file.getAll(page);

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual([fileData]);
  });

  test('/file (POST)', async () => {
    const fd = new FormData();
    const dirId = 1;
    const newFile = new File(['foo'], 'test.txt', {
      type: 'text/plain',
    });
    fd.append('file', newFile);
    mock.onPost('/file').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toEqual(fd);
      return [HttpStatus.CREATED];
    });

    const {status} = await file.create(fd, dirId);

    expect(status).toBe(HttpStatus.CREATED);
  });

  test('/file (DELETE)', async () => {
    const id = 1;
    mock.onDelete('/file').reply((config) => {
      const {headers, params} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(params.id).toEqual(id);
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await file.remove(id);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });
});
