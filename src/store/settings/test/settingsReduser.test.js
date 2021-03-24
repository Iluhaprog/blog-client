import {
  initialState,
  settingsReduser, themes,
} from '../settingsReduser';
import * as settings from '../settingsActions';

describe('settingsReduser', () => {
  test('Should handle SET_LANG action', () => {
    const testLang = 'test_lang';
    const result = settingsReduser(initialState, settings.setLang(testLang));
    expect(result).toEqual({
      ...initialState,
      lang: testLang,
    });
  });

  test('Should handle SET_THEME action', () => {
    const result = settingsReduser(initialState, settings.setDarkTheme());
    expect(result).toEqual({
      ...initialState,
      theme: themes.DARK,
    });
  });
});
