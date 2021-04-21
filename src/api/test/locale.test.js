import MockAdapter from 'axios-mock-adapter';
import {api} from '../api';
import * as locale from '../locale';
import {HttpStatus} from '../status';


describe('Locale api module', () => {
  const mock = new MockAdapter(api);

  test('/locale (GET)', async () => {
    const locales = ['locale1', 'locale2'];
    mock.onGet(`/locale`).reply(HttpStatus.OK, locales);

    const {status, data} = await locale.getLocales();

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual(locales);
  });
});
