import {locales} from '../../locales/locales';
import * as settings from './settingsActions';

export const themes = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const initialState = {
  lang: locales.en,
  theme: themes.LIGHT,
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case settings.SET_LANG:
      return {
        ...state,
        lang: action.lang,
      };
    case settings.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return {
        ...state,
      };
  }
};
