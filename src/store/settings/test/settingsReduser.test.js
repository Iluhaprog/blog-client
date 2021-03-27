import {
  initialState,
  settingsReducer, themes,
} from '../settingsReducer';
import * as settings from '../settingsActions';

describe('settingsReduser', () => {
  test('Should handle SET_LANG action', () => {
    const testLang = 'test_lang';
    const result = settingsReducer(initialState, settings.setLang(testLang));
    expect(result).toEqual({
      ...initialState,
      lang: testLang,
    });
  });

  test('Should handle SET_THEME action', () => {
    const result = settingsReducer(initialState, settings.setDarkTheme());
    expect(result).toEqual({
      ...initialState,
      theme: themes.DARK,
    });
  });
});
