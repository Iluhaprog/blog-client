import * as auth from '../../api/auth';
import * as error from '../error/errorActions';
import {
  createDeclarator,
  createFetchToggler,
} from '../../utils/decorators/decorators';

export const MAKE_AUTH = 'MAKE_AUTH';
export const CLEAR_AUTH = 'CLEAR_AUTH';
export const TOGGLE_AUTH_FETCH = 'TOGGLE_AUTH_FETCH';

export const toggleFetch = createFetchToggler(TOGGLE_AUTH_FETCH);

export const makeAuth = (auth) => ({
  type: MAKE_AUTH,
  auth,
});

export const clearAuth = () => ({type: CLEAR_AUTH});

export const authAsyncActionCreator = createDeclarator(
    toggleFetch,
    error.addError,
);

export const login = authAsyncActionCreator(
    (dispatch, username, password) => {
      return auth.login(username, password).then((response) => {
        const {data} = response;
        dispatch(makeAuth(data));
      });
    },
);

export const refreshToken = authAsyncActionCreator(
    (dispatch) => {
      return auth.refreshToken().then((response) => {
        const {data} = response;
        dispatch(makeAuth(data));
      });
    },
);

export const logout = authAsyncActionCreator(
    (dispatch) => {
      return auth.logout().then(() => {
        dispatch(clearAuth());
      });
    },
);

export const logoutAll = authAsyncActionCreator(
    (dispatch) => {
      return auth.logoutAll().then(() => {
        dispatch(clearAuth());
      });
    },
);
