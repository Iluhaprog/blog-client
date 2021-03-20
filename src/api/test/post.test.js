import MockAdapter from 'axios-mock-adapter';
import {api} from '../api';
import {HttpStatus} from '../status';
import * as post from '../post';

describe('Post api module', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('/post/by-tags (POST)', async () => {
    const tags = [1, 2, 3];
    const postData = {title: 'TEST_POST_TITLE'};
    mock.onPost('/post/by-tags').reply(
        (config) => {
          const {data} = config;
          expect(data).toBe(JSON.stringify(tags));
          return [HttpStatus.OK, [postData]];
        },
    );

    const {status, data} = await post.getByTags(tags);

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual([postData]);
  });

  test('/post/{page}/{limit} (GET)', async () => {
    const postData = {title: 'TEST_POST_TITLE'};
    const page = 1;
    const limit = process.env.REACT_APP_PAGINATION_LIMIT;
    mock.onGet('/post', {
      params: {page, limit},
    }).reply(HttpStatus.OK, [postData]);

    const {status, data} = await post.getAll(page);

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual([postData]);
  });

  test('/post/{id} (GET)', async () => {
    const id = 1;
    const postData = {title: 'TEST_POST_TITLE'};
    mock.onGet('/post', {
      params: {id},
    }).reply(HttpStatus.OK, postData);

    const {status, data} = await post.getById(id);

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual(postData);
  });

  test('/post (GET)', async () => {
    const postData = {title: 'TEST_POST_TITLE'};
    mock.onGet('/post').reply(HttpStatus.OK, postData);

    const {status, data} = await post.getLast();

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual(postData);
  });

  test('/post (POST)', async () => {
    const newPost = {title: 'TEST_POST_TITLE'};
    mock.onPost('/post').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(newPost));
      return [HttpStatus.CREATED];
    });

    const {status} = await post.create(newPost);

    expect(status).toBe(HttpStatus.CREATED);
  });

  test('/post (PUT)', async () => {
    const updatedPost = {title: 'TEST_POST_TITLE'};
    mock.onPut('/post').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(updatedPost));
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await post.update(updatedPost);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });

  test('/post (DELETE)', async () => {
    const id = 1;
    mock.onDelete('/post').reply((config) => {
      const {headers, params} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(params.id).toBe(id);
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await post.remove(id);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });
});