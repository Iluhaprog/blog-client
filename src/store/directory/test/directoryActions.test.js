import * as uuid from 'uuid';
import * as message from '../../message/messageActions';
import * as dir from '../directoryActions';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import configureStore from 'redux-mock-store';
import {HttpStatus} from '../../../api/status';
import thunk from 'redux-thunk';
import {MessageTypes} from '../../message/MessageTypes';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const mockStore = configureStore([thunk]);

describe('Directory action creators', () => {
  const mock = new MockAdapter(api);

  const messageId = 'TEST_MESSAGE_ID';
  const expectedActionsMock = [
    {type: dir.TOGGLE_DIR_FETCH},
    {
      type: message.ADD_MESSAGE,
      message: {
        id: messageId,
        type: MessageTypes.SUCCESS,
        data: {},
      },
    },
    {type: dir.TOGGLE_DIR_FETCH},
  ];

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => messageId);
  });

  test('Should create TOGGLE_DIR_FETCH action', () => {
    const store = mockStore({});
    const expectedActions = [{type: dir.TOGGLE_DIR_FETCH}];
    store.dispatch(dir.toggleFetch());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create ADD_DIR action', () => {
    const store = mockStore({});
    const dirData = {name: 'TEST_DIR'};
    const expectedActions = [{type: dir.ADD_DIR, dir: dirData}];
    store.dispatch(dir.addDir(dirData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_DIRS_ARRAY action', () => {
    const store = mockStore({});
    const dirData = {name: 'TEST_DIR'};
    const expectedActions = [{type: dir.FILL_DIRS_ARRAY, dirs: [dirData]}];
    store.dispatch(dir.fillDirsArray([dirData]));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create REMOVE_DIR action', () => {
    const store = mockStore({});
    const id = 1;
    const expectedActions = [{type: dir.REMOVE_DIR, id}];
    store.dispatch(dir.removeDir(id));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_DIRS_ARRAY action (async getAll)', () => {
    const store = mockStore({});
    const dirData = {name: 'TEST_DIR'};
    const expectedActions = [
      ...expectedActionsMock,
      {type: dir.FILL_DIRS_ARRAY, dirs: [dirData]},
    ];
    const page = 0;
    const limit = 10;
    mock.onGet(`/directory/${page}/${limit}`)
        .reply(HttpStatus.OK, [dirData]);

    return store.dispatch(dir.getAll(page, limit)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create ADD_DIR action (async create)', () => {
    const store = mockStore({});
    const dirData = {name: 'TEST_DIR'};
    const resultData = {id: 1, ...dirData};
    const token = 'TEST_TOKEN';
    const expectedActions = [
      ...expectedActionsMock,
      {type: dir.ADD_DIR, dir: resultData},
    ];

    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
    mock.onPost('/directory').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(dirData));
      return [HttpStatus.CREATED, resultData];
    });

    return store.dispatch(dir.create(dirData)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create REMOVE_DIR action (async remove)', () => {
    const store = mockStore({});
    const id = 1;
    const expectedActions = [
      ...expectedActionsMock,
      {type: dir.REMOVE_DIR, id},
    ];
    const token = 'TEST_TOKEN';

    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
    mock.onDelete('/directory/'+id).reply((config) => {
      const {headers, params} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.NO_CONTENT];
    });

    return store.dispatch(dir.remove(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });
});
