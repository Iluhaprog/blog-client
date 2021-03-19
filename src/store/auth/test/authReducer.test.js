import {
  initialState,
  authReducer,
} from '../authReducer';
import * as auth from '../authActions';

describe('Auth reducer', () => {
  test('Should handle TOGGLE_AUTH_FETCH action', () => {
    expect(authReducer(initialState, auth.toggleFetch())).toEqual({
      ...initialState,
      isFetch: true,
    });
  });

  test('Should handle MAKE_AUTH action', () => {
    const authData = {
      accessToken: 'TEST_ACCESS_TOKEN',
      refreshToken: 'TEST_REFRESH_TOKEN',
    };
    expect(authReducer(initialState, auth.makeAuth(authData))).toEqual({
      ...initialState,
      accessToken: authData.accessToken,
      refreshToken: authData.refreshToken,
      isAuthorized: true,
    });
  });

  test('Should handle CLEAR_AUTH action', () => {
    const state = {
      ...initialState,
      accessToken: 'TEST_ACCESS_TOKEN',
      refreshToken: 'TEST_REFRESH_TOKEN',
      isAuthorized: true,
    };
    expect(authReducer(state, auth.clearAuth())).toEqual(initialState);
  });
});
