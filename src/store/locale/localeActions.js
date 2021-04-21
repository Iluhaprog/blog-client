import {createDeclarator} from '../../utils/decorators/decorators';
import * as message from '../message/messageActions';
import * as locale from '../../api/locale';

export const SET_LOCALES = 'SET_LOCALES';
export const TOGGLE_LOCALE_FETCH = 'TOGGLE_LOCALE_FETCH';

const toggleFetch = () => ({
  type: TOGGLE_LOCALE_FETCH,
});

export const setLocales = (locales) => ({
  type: SET_LOCALES,
  locales,
});

const localeAsyncActionCreator = createDeclarator(
    toggleFetch,
    message.addMessage,
);

export const getLocales = localeAsyncActionCreator(
    (dispatch) => {
      return locale.getLocales().then((response) => {
        const {data} = response;
        dispatch(setLocales(data));
      });
    },
);
