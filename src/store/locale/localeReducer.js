import * as locale from './localeActions';

export const initialState = {
  array: [],
};

export const localeReducer = (state = initialState, action) => {
  switch (action.type) {
    case locale.SET_LOCALES:
      return {
        array: action.locales,
      };
    default:
      return {...state};
  }
}
