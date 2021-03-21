import MockAdapter from 'axios-mock-adapter';
import {api} from '../api';
import * as social from '../social';
import {HttpStatus} from '../status';

describe('Social api module', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('/social (GET)', async () => {
    const socialData = {title: 'TEST_SOCIAL_TITLE'};
    mock.onGet('/social').reply(HttpStatus.OK, [socialData]);

    const {status, data} = await social.getAll();

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual([socialData]);
  });

  test('/social (POST)', async () => {
    const newSocial = {title: 'TEST_SOCIAL_TITLE'};
    const socialResult = {id: 1, ...newSocial};
    mock.onPost('/social').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(newSocial));
      return [HttpStatus.CREATED, socialResult];
    });

    const {status, data} = await social.create(newSocial);

    expect(data).toEqual(socialResult);
    expect(status).toBe(HttpStatus.CREATED);
  });

  test('/social (PUT)', async () => {
    const updatedSocial = {title: 'TEST_SOCIAL_TITLE'};
    mock.onPut('/social').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(updatedSocial));
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await social.update(updatedSocial);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });

  test('/social (DELETE)', async () => {
    const id = 1;
    mock.onDelete('/social').reply((config) => {
      const {headers, params} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(params.id).toBe(id);
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await social.remove(id);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });
});
