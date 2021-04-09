import * as uuid from 'uuid';
import * as tag from '../tagActions';
import * as message from '../../message/messageActions';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {Filter} from '../../../api/filters';
import {HttpStatus} from '../../../api/status';
import {MessageTypes} from '../../message/MessageTypes';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const mockStore = configureStore([thunk]);

describe('Tag action creator', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  const messageId = 'TEST_MESSAGE_ID';
  const expectedActionsMock = [
    {type: tag.TOGGLE_TAG_FETCH},
    {
      type: message.ADD_MESSAGE,
      message: {
        id: messageId,
        type: MessageTypes.SUCCESS,
        data: {},
      },
    },
    {type: tag.TOGGLE_TAG_FETCH},
  ];

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => messageId);
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('Should create TOGGLE_TAG_FETCH action', () => {
    const expectedActions = [{type: tag.TOGGLE_TAG_FETCH}];
    const store = mockStore({});
    store.dispatch(tag.toggleFetch());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create ADD_TAG action', () => {
    const tagData = {title: 'TEST_TAG_TITLE'};
    const expectedActions = [{type: tag.ADD_TAG, tag: tagData}];
    const store = mockStore({});
    store.dispatch(tag.addTag(tagData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_TAGS_ARRAY action', () => {
    const tagData = {title: 'TEST_TAG_TITLE'};
    const expectedActions = [{type: tag.FILL_TAGS_ARRAY, tags: [tagData]}];
    const store = mockStore({});
    store.dispatch(tag.fillTagsArray([tagData]));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create REMOVE_TAG action', () => {
    const id = 1;
    const expectedActions = [{type: tag.REMOVE_TAG, id}];
    const store = mockStore({});
    store.dispatch(tag.removeTag(id));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_TAGS_ARRAY action (async getAll)', () => {
    const tagData = {title: 'TEST_TAG_TITLE'};
    const order = Filter.DESC;
    mock.onGet(`/tag/${order}`).reply(HttpStatus.OK, [tagData]);
    const store = mockStore({});
    const expectedActions = [
      ...expectedActionsMock,
      {type: tag.FILL_TAGS_ARRAY, tags: [tagData]},
    ];

    return store.dispatch(tag.getAll()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create ADD_TAG action (async create)', () => {
    const newTag = {title: 'TEST_TAG_TITLE'};
    const tagResult = {id: 1, ...newTag};
    mock.onPost('/tag').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(newTag));
      return [HttpStatus.CREATED, tagResult];
    });
    const expectedActions = [
      ...expectedActionsMock,
      {type: tag.ADD_TAG, tag: tagResult},
    ];
    const store = mockStore({});
    return store.dispatch(tag.create(newTag)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create REMOVE_TAG action (async remove)', () => {
    const id = 1;
    mock.onDelete('/tag/'+id).reply((config) => {
      const {headers} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.NO_CONTENT];
    });
    const store = mockStore({});
    const expectedActions = [
      ...expectedActionsMock,
      {type: tag.REMOVE_TAG, id},
    ];
    return store.dispatch(tag.remove(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });
});
