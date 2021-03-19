import configureStore from 'redux-mock-store';
import * as auth from '../authActions';
import thunk from 'redux-thunk';
import {base64Encode} from '../../../utils/base64';
import {HttpStatus} from '../../../api/status';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';

const mockStore = configureStore([thunk]);

describe('Auth action creators', () => {
  const mock = new MockAdapter(api);

  test('Should create TOGGLE_AUTH_FETCH action (toggleFetch)', () => {
    const store = mockStore();
    const expectedActions = [{type: auth.TOGGLE_AUTH_FETCH}];
    store.dispatch(auth.toggleFetch());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create MAKE_AUTH action', () => {
    const store = mockStore();
    const authData = {
      refreshToken: 'TEST_REFRESH_TOKEN',
      accessToken: 'TEST_ACCESS_TOKEN',
    };
    const expectedActions = [{type: auth.MAKE_AUTH, auth: authData}];
    store.dispatch(auth.makeAuth(authData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create CLEAR_AUTH action', () => {
    const store = mockStore();
    const expectedActions = [{type: auth.CLEAR_AUTH}];
    store.dispatch(auth.clearAuth());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create MAKE_AUTH (async)', () => {
    const authData = {
      refreshToken: 'TEST_REFRESH_TOKEN',
      accessToken: 'TEST_ACCESS_TOKEN',
    };
    const store = mockStore();
    const username = 'TEST_USERNAME';
    const password = 'TEST_PASSWORD';
    const expectedActions = [
      {type: auth.TOGGLE_AUTH_FETCH},
      {type: auth.MAKE_AUTH, auth: authData},
      {type: auth.TOGGLE_AUTH_FETCH},
    ];
    const token = base64Encode(`${username}:${password}`);
    mock.onPost('/auth/login').reply((config) => {
      expect(config.headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.OK, authData];
    });

    return store.dispatch(auth.login(username, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Should create MAKE_AUTH action (async refreshToken)', () => {
    const token = 'TEST_ACCESS_TOKEN';
    const answer = {
      accessToken: 'TEST_ACCESS_TOKEN',
      refreshToken: 'TEST_REFRESH_TOKEN',
    };
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
    mock.onGet('/auth/refresh-token').reply((config) => {
      expect(config.headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.OK, answer];
    });
    const expectedActions = [
      {type: auth.TOGGLE_AUTH_FETCH},
      {type: auth.MAKE_AUTH, auth: answer},
      {type: auth.TOGGLE_AUTH_FETCH},
    ];
    const store = mockStore();

    return store.dispatch(auth.refreshToken()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Should create action CLEAR_AUTH (async)', () => {
    const token = 'TEST_ACCESS_TOKEN';
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
    mock.onGet('/auth/logout').reply((config) => {
      expect(config.headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.OK];
    });
    const store = mockStore();
    const expectedActions = [
      {type: auth.TOGGLE_AUTH_FETCH},
      {type: auth.CLEAR_AUTH},
      {type: auth.TOGGLE_AUTH_FETCH},
    ];

    return store.dispatch(auth.logout()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Should create action CLEAR_AUTH (async logoutAll)', () => {
    const token = 'TEST_ACCESS_TOKEN';
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
    mock.onGet('/auth/logoutAll').reply((config) => {
      expect(config.headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.OK];
    });
    const store = mockStore();
    const expectedActions = [
      {type: auth.TOGGLE_AUTH_FETCH},
      {type: auth.CLEAR_AUTH},
      {type: auth.TOGGLE_AUTH_FETCH},
    ];

    return store.dispatch(auth.logoutAll()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
