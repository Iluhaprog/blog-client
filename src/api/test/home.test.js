import MockAdapter from 'axios-mock-adapter';
import {api} from '../api';
import {HttpStatus} from '../status';
import * as home from '../home';

describe('Home api module', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('/home (GET)', async () => {
    const homeData = {title: 'TEST_HOME_TITLE'};
    mock.onGet('/home').reply(HttpStatus.OK, [homeData]);

    const {status, data} = await home.getAll();

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual([homeData]);
  });

  test('/home/one (GET)', async () => {
    const homeData = {title: 'TEST_HOME_TITLE'};
    mock.onGet('/home/one').reply(HttpStatus.OK, homeData);

    const {status, data} = await home.getOne();

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual(homeData);
  });

  test('/home (POST)', async () => {
    const newHome = {title: 'TEST_HOME_TITLE'};
    mock.onPost('/home').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(newHome));
      return [HttpStatus.CREATED, newHome];
    });

    const {status, data} = await home.create(newHome);

    expect(status).toBe(HttpStatus.CREATED);
    expect(data).toEqual(newHome);
  });

  test('/home (PUT)', async () => {
    const updatedHome = {title: 'TEST_HOME_TITLE'};
    mock.onPut('/home').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(updatedHome));
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await home.update(updatedHome);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });

  test('/home (DELETE)', async () => {
    const id = 1;
    mock.onDelete('/home').reply((config) => {
      const {headers, params} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(params.id).toBe(id);
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await home.remove(id);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });
});
