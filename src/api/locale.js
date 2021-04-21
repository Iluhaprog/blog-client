import {api} from './api';

const LOCALE_URL = '/locale';

export function getLocales() {
  return api.get(LOCALE_URL);
}
