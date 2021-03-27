import {themes} from './settingsReducer';
import {locales} from '../../locales/locales';

export const SET_LANG = 'SET_LANG';
export const SET_THEME = 'SET_THEME';

export const setLang = (lang = locales.en) => ({
  type: SET_LANG,
  lang,
});

export const setLightTheme = () => ({
  type: SET_THEME,
  theme: themes.LIGHT,
});

export const setDarkTheme = () => ({
  type: SET_THEME,
  theme: themes.DARK,
});
