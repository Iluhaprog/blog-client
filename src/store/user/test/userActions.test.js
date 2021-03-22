import * as user from '../userActions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import {HttpStatus} from '../../../api/status';

const mockStore = configureStore([thunk]);

describe('User actions creators', () => {
  let mock;
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    mock = new MockAdapter(api);
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('Should create TOGGLE_USER_FETCH action', () => {
    const expectedActions = [{type: user.TOGGLE_USER_FETCH}];
    const store = mockStore();
    store.dispatch(user.toggleFetch());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create SET_USER_DATA action', () => {
    const userData = {name: 'TEST_USER_NAME'};
    const expectedActions = [{type: user.SET_USER_DATA, user: userData}];
    const store = mockStore();
    store.dispatch(user.setUserData(userData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create ADD_USER action', () => {
    const userData = {name: 'TEST_USER_NAME'};
    const expectedActions = [{type: user.ADD_USER, user: userData}];
    const store = mockStore();
    store.dispatch(user.addUser(userData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_USERS_ARRAY action', () => {
    const userData = {id: 1};
    const expectedActions = [{type: user.FILL_USERS_ARRAY, users: [userData]}];
    const store = mockStore();
    store.dispatch(user.fillUsersArray([userData]));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create UPDATE_USER action', () => {
    const userData = {name: 'TEST_USER_NAME'};
    const expectedActions = [{type: user.UPDATE_USER, user: userData}];
    const store = mockStore();
    store.dispatch(user.updateUser(userData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create ADD_USER action (async create)', () => {
    const newUser = {login: 'test'};
    mock.onPost('/user', newUser, {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }).reply(HttpStatus.CREATED, newUser);
    const expectedActions = [
      {type: user.TOGGLE_USER_FETCH},
      {type: user.ADD_USER, user: newUser},
      {type: user.TOGGLE_USER_FETCH},
    ];
    const store = mockStore();
    return store.dispatch(user.create(newUser)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create SET_USER_DATA action (async getById)', () => {
    const id = 1;
    const userData = {id: 1};
    mock.onGet(`/user`, {
      params: {id},
    }).reply(HttpStatus.OK, userData);
    const expectedActions = [
      {type: user.TOGGLE_USER_FETCH},
      {type: user.SET_USER_DATA, user: userData},
      {type: user.TOGGLE_USER_FETCH},
    ];
    const store = mockStore();
    return store.dispatch(user.getById(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create FILL_USERS_ARRAY action (async getAll)', () => {
    const userData = {id: 1};
    mock.onGet(`/user`).reply(HttpStatus.OK, [userData]);
    const expectedActions = [
      {type: user.TOGGLE_USER_FETCH},
      {type: user.FILL_USERS_ARRAY, users: [userData]},
      {type: user.TOGGLE_USER_FETCH},
    ];
    const store = mockStore();
    return store.dispatch(user.getAll()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create UPDATE_USER action (async update)', () => {
    const updatedUser = {login: 'test'};
    mock.onPut('/user').reply((config) => {
      const {headers, data} = config;
      expect(headers['Accept']).toBe('application/json');
      expect(headers['Content-Type']).toBe('application/json');
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toEqual(JSON.stringify(updatedUser));
      return [HttpStatus.NO_CONTENT];
    });
    const expectedActions = [
      {type: user.TOGGLE_USER_FETCH},
      {type: user.UPDATE_USER, user: updatedUser},
      {type: user.TOGGLE_USER_FETCH},
    ];
    const store = mockStore();
    return store.dispatch(user.update(updatedUser)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test(' (async updatePassword)', () => {
    const creds = {newPassword: 'test'};
    mock.onPut('/user/password').reply((config) => {
      const {headers, data} = config;
      expect(headers['Accept']).toBe('application/json');
      expect(headers['Content-Type']).toBe('application/json');
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toEqual(JSON.stringify(creds));
      return [HttpStatus.NO_CONTENT];
    });
    const expectedActions = [
      {type: user.TOGGLE_USER_FETCH},
      {type: user.TOGGLE_USER_FETCH},
    ];
    const store = mockStore();
    return store.dispatch(user.updatePassword(creds)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
