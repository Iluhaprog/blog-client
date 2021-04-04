import * as uuid from 'uuid';
import * as file from '../fileActions';
import * as message from '../../message/messageActions';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {HttpStatus} from '../../../api/status';
import {Filter} from '../../../api/filters';
import {MessageTypes} from '../../message/MessageTypes';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const mockStore = configureStore([thunk]);

describe('File action creators', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  const messageId = 'TEST_MESSAGE_ID';
  const expectedActionsMock = [
    {type: file.TOGGLE_FILE_FETCH},
    {
      type: message.ADD_MESSAGE,
      message: {
        id: messageId,
        type: MessageTypes.SUCCESS,
        data: {},
      },
    },
    {type: file.TOGGLE_FILE_FETCH},
  ];

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => messageId);
  });

  test('Should create TOGGLE_FILE_FETCH action', () => {
    const expectedActions = [{type: file.TOGGLE_FILE_FETCH}];
    const store = mockStore({});
    store.dispatch(file.toggleFetch());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_FILES_ARRAY action', () => {
    const fileData = {name: 'file'};
    const files = {
      data: [fileData],
      total: 1,
    };
    const expectedActions = [{type: file.FILL_FILES_ARRAY, files}];
    const store = mockStore({});
    store.dispatch(file.fillFilesArray(files));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create ADD_FILE action', () => {
    const fileData = {name: 'file'};
    const expectedActions = [{type: file.ADD_FILE, file: fileData}];
    const store = mockStore({});
    store.dispatch(file.addFile(fileData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create REMOVE_FILE action', () => {
    const id = 1;
    const expectedActions = [{type: file.REMOVE_FILE, id}];
    const store = mockStore({});
    store.dispatch(file.removeFile(id));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_FILES_ARRAY action (async getAll)', () => {
    const fileData = {name: 'TEST_FILE_NAME'};
    const data = {
      data: [fileData],
      total: 1,
    };
    const page = 1;
    const limit = process.env.REACT_APP_PAGINATION_LIMIT;
    const order = Filter.DESC;
    mock.onGet(`/file/${page}/${limit}/${order}`)
        .reply(HttpStatus.OK, data);
    const expectedActions = [
      ...expectedActionsMock,
      {type: file.FILL_FILES_ARRAY, files: data},
    ];
    const store = mockStore({});

    return store.dispatch(file.getAll(page, limit)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create FILL_FILES_ARRAY action (async getByDirId)', () => {
    const fileData = {name: 'TEST_FILE_NAME'};
    const data = {
      data: [fileData],
      total: 1,
    };
    const dirId = 1;
    mock.onGet('/file/by-dir', {
      params: {dirId, order: Filter.DESC},
    }).reply(HttpStatus.OK, data);
    const expectedActions = [
      ...expectedActionsMock,
      {type: file.FILL_FILES_ARRAY, files: data},
    ];
    const store = mockStore({});

    return store.dispatch(file.getByDirId(dirId)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create ADD_FILE action (async create)', () => {
    const dirId = 1;
    const newFile = new File(['foo'], 'test.txt', {
      type: 'text/plain',
    });
    const fileResult = {id: 1, name: 'test.txt'};
    const fd = new FormData();
    fd.append('file', newFile);
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
    mock.onPost('/file').reply((config) => {
      const {headers, data, params} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(params.dir).toBe(dirId);
      expect(data).toEqual(fd);
      return [HttpStatus.CREATED, fileResult];
    });

    const store = mockStore({});
    const expectedActions = [
      ...expectedActionsMock,
      {type: file.ADD_FILE, file: fileResult},
    ];

    return store.dispatch(file.create(fd, dirId)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create REMOVE_FILE action (async remove)', () => {
    const id = 1;
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
    mock.onDelete('/file/'+id).reply((config) => {
      const {headers} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.NO_CONTENT];
    });

    const store = mockStore({});
    const expectedActions = [
      ...expectedActionsMock,
      {type: file.REMOVE_FILE, id},
    ];

    return store.dispatch(file.remove(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });
});
