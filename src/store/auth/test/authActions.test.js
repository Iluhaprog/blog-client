import * as uuid from 'uuid';
import configureStore from 'redux-mock-store';
import * as auth from '../authActions';
import * as message from '../../message/messageActions';
import thunk from 'redux-thunk';
import {HttpStatus} from '../../../api/status';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import {MessageTypes} from '../../message/MessageTypes';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const mockStore = configureStore([thunk]);

describe('Auth action creators', () => {
  const mock = new MockAdapter(api);
  const messageId = 'TEST_MESSAGE_ID';
  const expectedActionsMock = [
    {type: auth.TOGGLE_AUTH_FETCH},
    {
      type: message.ADD_MESSAGE,
      message: {
        id: messageId,
        type: MessageTypes.SUCCESS,
        data: {},
      },
    },
    {type: auth.TOGGLE_AUTH_FETCH},
  ];

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => messageId);
  });

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
      ...expectedActionsMock,
      {type: auth.MAKE_AUTH, auth: authData},
    ];
    mock.onPost('/auth/login').reply((config) => {
      return [HttpStatus.OK, authData];
    });

    return store.dispatch(auth.login(username, password)).then(() => {
      expect(store.getActions())
          .toEqual(expect.arrayContaining(expectedActions));
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
      ...expectedActionsMock,
      {type: auth.MAKE_AUTH, auth: answer},
    ];
    const store = mockStore();

    return store.dispatch(auth.refreshToken()).then(() => {
      expect(store.getActions())
          .toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create action CLEAR_AUTH (async)', () => {
    const token = 'TEST_ACCESS_TOKEN';
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
    jest.spyOn(localStorage, 'clear').mockImplementation(() => {});
    mock.onGet('/auth/logout').reply((config) => {
      expect(config.headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.OK];
    });
    const store = mockStore();
    const expectedActions = [
      ...expectedActionsMock,
      {type: auth.CLEAR_AUTH},
    ];

    return store.dispatch(auth.logout()).then(() => {
      expect(localStorage.clear).toHaveBeenCalled();
      expect(store.getActions())
          .toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create action CLEAR_AUTH (async logoutAll)', () => {
    const token = 'TEST_ACCESS_TOKEN';
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
    jest.spyOn(localStorage, 'clear').mockImplementation(() => {});
    mock.onGet('/auth/logoutAll').reply((config) => {
      expect(config.headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.OK];
    });
    const store = mockStore();
    const expectedActions = [
      ...expectedActionsMock,
      {type: auth.CLEAR_AUTH},
    ];

    return store.dispatch(auth.logoutAll()).then(() => {
      expect(localStorage.clear).toHaveBeenCalled();
      expect(store.getActions())
          .toEqual(expect.arrayContaining(expectedActions));
    });
  });
});
