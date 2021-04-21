import {
  initialState,
  localeReducer,
} from '../localeReducer';
import * as locale from '../localeActions';

describe('localeReducer', () => {
  test('Should handle SET_LOCALE actions', () => {
    const locales = [];
    const result = localeReducer(initialState, locale.setLocales(locales));
    expect(result).toEqual({
      array: locales,
    });
  });
})
