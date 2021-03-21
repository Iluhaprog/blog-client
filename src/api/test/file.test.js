import MockAdapter from 'axios-mock-adapter';
import {api} from '../api';
import {HttpStatus} from '../status';
import * as file from '../file';
import {Filter} from '../filters';

describe('File api module', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('/file/{page}/{limit}/{order} (GET)', async () => {
    const fileData = {name: 'TEST_FILE_NAME'};
    const page = 1;
    const limit = process.env.REACT_APP_PAGINATION_LIMIT;
    const response = {
      data: [fileData],
      total: 1,
    };
    mock.onGet('/file', {
      params: {page, limit, order: Filter.DESC},
    }).reply(HttpStatus.OK, response);

    const {status, data} = await file.getAll(page);

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual(response);
  });

  test('/file/by-dir/{dirId}/{order} (GET)', async () => {
    const fileData = {name: 'TEST_FILE_NAME'};
    const dirId = 1;
    const response = {
      data: [fileData],
      total: 1,
    };
    mock.onGet('/file/by-dir', {
      params: {dirId, order: Filter.DESC},
    }).reply(HttpStatus.OK, response);

    const {status, data} = await file.getByDirId(dirId);

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual(response);
  });

  test('/file (POST)', async () => {
    const fd = new FormData();
    const dirId = 1;
    const newFile = new File(['foo'], 'test.txt', {
      type: 'text/plain',
    });
    fd.append('file', newFile);
    const fileResult = {id: 1, name: 'test.txt'};
    mock.onPost('/file').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toEqual(fd);
      return [HttpStatus.CREATED, fileResult];
    });

    const {status, data} = await file.create(fd, dirId);

    expect(data).toEqual(fileResult);
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
