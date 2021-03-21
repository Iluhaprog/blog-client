import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import * as home from '../homeActions';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {HttpStatus} from '../../../api/status';

const mockStore = configureStore([thunk]);

describe('Home action creator', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('Should create TOGGLE_HOME_FETCH action', () => {
    const expectedActions = [{type: home.TOGGLE_HOME_FETCH}];
    const store = mockStore();
    store.dispatch(home.toggleFetch());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create SELECT_HOME action', () => {
    const homeData = {title: 'TEST_HOME_TITLE'};
    const expectedActions = [{type: home.SELECT_HOME, home: homeData}];
    const store = mockStore();
    store.dispatch(home.selectHome(homeData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create ADD_HOME action', () => {
    const homeData = {title: 'TEST_HOME_TITLE'};
    const expectedActions = [{type: home.ADD_HOME, home: homeData}];
    const store = mockStore();
    store.dispatch(home.addHome(homeData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_HOMES_ARRAY action', () => {
    const homes = [{title: 'TEST_HOME_TITLE'}];
    const expectedActions = [{type: home.FILL_HOMES_ARRAY, homes}];
    const store = mockStore();
    store.dispatch(home.fillHomesArray(homes));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create UPDATE_HOME action', () => {
    const homeData = {title: 'TEST_HOME_TITLE'};
    const expectedActions = [{type: home.UPDATE_HOME, home: homeData}];
    const store = mockStore();
    store.dispatch(home.updateHome(homeData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create REMOVE_HOME action', () => {
    const id = 1;
    const expectedActions = [{type: home.REMOVE_HOME, id}];
    const store = mockStore();
    store.dispatch(home.removeHome(id));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_HOMES_ARRAY action (async getAll)', () => {
    const homeData = {title: 'TEST_HOME_TITLE'};
    mock.onGet('/home').reply(HttpStatus.OK, [homeData]);
    const store = mockStore();
    const expectedActions = [
      {type: home.TOGGLE_HOME_FETCH},
      {type: home.FILL_HOMES_ARRAY, homes: [homeData]},
      {type: home.TOGGLE_HOME_FETCH},
    ];

    return store.dispatch(home.getAll()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create SELECT_HOME action (async getOne)', () => {
    const homeData = {title: 'TEST_HOME_TITLE'};
    mock.onGet('/home/one').reply(HttpStatus.OK, homeData);
    const store = mockStore();
    const expectedActions = [
      {type: home.TOGGLE_HOME_FETCH},
      {type: home.SELECT_HOME, home: homeData},
      {type: home.TOGGLE_HOME_FETCH},
    ];

    return store.dispatch(home.getOne()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create ADD_HOME action (async create)', () => {
    const newHome = {title: 'TEST_HOME_TITLE'};
    mock.onPost('/home').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(newHome));
      return [HttpStatus.CREATED, newHome];
    });
    const store = mockStore();
    const expectedActions = [
      {type: home.TOGGLE_HOME_FETCH},
      {type: home.ADD_HOME, home: newHome},
      {type: home.TOGGLE_HOME_FETCH},
    ];

    return store.dispatch(home.create(newHome)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create UPDATE_HOME action (async update)', () => {
    const updatedHome = {title: 'TEST_HOME_TITLE'};
    mock.onPut('/home').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(updatedHome));
      return [HttpStatus.NO_CONTENT];
    });
    const store = mockStore();
    const expectedActions = [
      {type: home.TOGGLE_HOME_FETCH},
      {type: home.UPDATE_HOME, home: updatedHome},
      {type: home.TOGGLE_HOME_FETCH},
    ];

    return store.dispatch(home.update(updatedHome)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create REMOVE_HOME action (async remove)', () => {
    const id = 1;
    mock.onDelete('/home').reply((config) => {
      const {headers, params} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(params.id).toBe(id);
      return [HttpStatus.NO_CONTENT];
    });
    const store = mockStore();
    const expectedActions = [
      {type: home.TOGGLE_HOME_FETCH},
      {type: home.REMOVE_HOME, id},
      {type: home.TOGGLE_HOME_FETCH},
    ];

    return store.dispatch(home.remove(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
