import MockAdapter from 'axios-mock-adapter';
import {api} from '../api';
import {HttpStatus} from '../status';
import * as tag from '../tag';
import {Filter} from '../filters';

describe('Tag api module', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('/tag (GET)', async () => {
    const tagData = {title: 'TEST_TAG_TITLE'};
    mock.onGet('/tag', {
      params: {
        order: Filter.DESC,
      },
    }).reply(HttpStatus.OK, [tagData]);
    const {status, data} = await tag.getAll();

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual([tagData]);
  });

  test('/tag (POST)', async () => {
    const newTag = {title: 'TEST_TAG_TITLE'};
    const tagResult = {id: 1, ...newTag};
    mock.onPost('/tag').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(newTag));
      return [HttpStatus.CREATED, tagResult];
    });

    const {status, data} = await tag.create(newTag);

    expect(data).toEqual(tagResult);
    expect(status).toBe(HttpStatus.CREATED);
  });

  test('/tag (DELETE)', async () => {
    const id = 1;
    mock.onDelete('/tag').reply((config) => {
      const {headers, params} = config;
      expect(params.id).toBe(id);
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await tag.remove(id);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });
});
