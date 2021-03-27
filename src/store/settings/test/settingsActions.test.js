import * as settings from '../settingsActions';
import configureStore from 'redux-mock-store';
import {locales} from '../../../locales/locales';
import {themes} from '../settingsReducer';

const mockStore = configureStore();

describe('Settings actions creators', () => {
  test('Should create SET_LANG action', () => {
    const expectedActions = [{
      type: settings.SET_LANG,
      lang: locales.en,
    }];
    const store = mockStore();
    store.dispatch(settings.setLang());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create SET_THEME action (setLightTheme)', () => {
    const expectedActions = [{
      type: settings.SET_THEME,
      theme: themes.LIGHT,
    }];
    const store = mockStore();
    store.dispatch(settings.setLightTheme());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create SET_THEME action (setDarkTheme)', () => {
    const expectedActions = [{
      type: settings.SET_THEME,
      theme: themes.DARK,
    }];
    const store = mockStore();
    store.dispatch(settings.setDarkTheme());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
});
