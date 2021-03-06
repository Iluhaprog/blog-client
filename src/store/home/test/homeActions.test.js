import * as uuid from 'uuid';
import * as home from '../homeActions';
import * as message from '../../message/messageActions';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {HttpStatus} from '../../../api/status';
import {MessageTypes} from '../../message/MessageTypes';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const mockStore = configureStore([thunk]);

describe('Home action creator', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  const messageId = 'TEST_MESSAGE_ID';
  const expectedActionsMock = [
    {type: home.TOGGLE_HOME_FETCH},
    {
      type: message.ADD_MESSAGE,
      message: {
        id: messageId,
        type: MessageTypes.SUCCESS,
        data: {},
      },
    },
    {type: home.TOGGLE_HOME_FETCH},
  ];

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => messageId);
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
      ...expectedActionsMock,
      {type: home.FILL_HOMES_ARRAY, homes: [homeData]},
    ];

    return store.dispatch(home.getAll()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create SELECT_HOME action (async getOne)', () => {
    const homeData = {title: 'TEST_HOME_TITLE'};
    mock.onGet('/home/one').reply(HttpStatus.OK, homeData);
    const store = mockStore();
    const expectedActions = [
      ...expectedActionsMock,
      {type: home.SELECT_HOME, home: homeData},
    ];

    return store.dispatch(home.getOne()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
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
      ...expectedActionsMock,
      {type: home.ADD_HOME, home: newHome},
    ];

    return store.dispatch(home.create(newHome)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
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
      ...expectedActionsMock,
      {type: home.UPDATE_HOME, home: updatedHome},
    ];

    return store.dispatch(home.update(updatedHome)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create REMOVE_HOME action (async remove)', () => {
    const id = 1;
    mock.onDelete('/home/'+id).reply((config) => {
      const {headers} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.NO_CONTENT];
    });
    const store = mockStore();
    const expectedActions = [
      ...expectedActionsMock,
      {type: home.REMOVE_HOME, id},
    ];

    return store.dispatch(home.remove(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });
});
