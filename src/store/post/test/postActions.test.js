import * as uuid from 'uuid';
import * as post from '../postActions';
import * as message from '../../message/messageActions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import {HttpStatus} from '../../../api/status';
import {Filter} from '../../../api/filters';
import {MessageTypes} from '../../message/MessageTypes';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const mockStore = configureStore([thunk]);

describe('Post actions creators', () => {
  let mock;
  const token = 'TEST_TOKEN';

  const messageId = 'TEST_MESSAGE_ID';
  const expectedActionsMock = [
    {type: post.TOGGLE_POST_FETCH},
    {
      type: message.ADD_MESSAGE,
      message: {
        id: messageId,
        type: MessageTypes.SUCCESS,
        data: {},
      },
    },
    {type: post.TOGGLE_POST_FETCH},
  ];

  beforeEach(() => {
    mock = new MockAdapter(api);
    uuid.v4.mockImplementationOnce(() => messageId);
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('Should create TOGGLE_POST_FETCH action', () => {
    const expectedActions = [{type: post.TOGGLE_POST_FETCH}];
    const store = mockStore();
    store.dispatch(post.toggleFetch());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create SELECT_POST action', () => {
    const postData = {title: 'TEST_POST_TITLE'};
    const expectedActions = [{type: post.SELECT_POST, post: postData}];
    const store = mockStore();
    store.dispatch(post.selectPost(postData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create ADD_POST action', () => {
    const postData = {title: 'TEST_POST_TITLE'};
    const expectedActions = [{type: post.ADD_POST, post: postData}];
    const store = mockStore();
    store.dispatch(post.addPost(postData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create UPDATE_POST action', () => {
    const postData = {title: 'TEST_POST_TITLE'};
    const expectedActions = [{type: post.UPDATE_POST, post: postData}];
    const store = mockStore();
    store.dispatch(post.updatePost(postData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_POSTS_ARRAY action', () => {
    const postData = {title: 'TEST_POST_TITLE'};
    const expectedActions = [{type: post.FILL_POSTS_ARRAY, posts: [postData]}];
    const store = mockStore();
    store.dispatch(post.fillPostsArray([postData]));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create SET_POST_TOTAL action', () => {
    const total = 1;
    const expectedActions = [{type: post.SET_POST_TOTAL, total: 1}];
    const store = mockStore();
    store.dispatch(post.setPostTotal(total));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create REMOVE_POST action', () => {
    const id = 1;
    const expectedActions = [{type: post.REMOVE_POST, id}];
    const store = mockStore();
    store.dispatch(post.removePost(id));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_POSTS_ARRAY action (async getByTags)', () => {
    const tags = [1, 2, 3];
    const postData = {title: 'TEST_POST_TITLE'};
    mock.onPost('/post/by-tags').reply(
        (config) => {
          const {data} = config;
          expect(data).toBe(JSON.stringify(tags));
          return [HttpStatus.OK, [postData]];
        },
    );
    const store = mockStore({});
    const expectedActions = [
      ...expectedActionsMock,
      {type: post.FILL_POSTS_ARRAY, posts: [postData]},
    ];
    return store.dispatch(post.getByTags(tags)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create FILL_POSTS_ARRAY action (async getAll)', () => {
    const postData = {
      data: [{title: 'TEST_POST_TITLE'}],
      total: 1,
    };
    const page = 1;
    const limit = process.env.REACT_APP_PAGINATION_LIMIT;
    const order = Filter.DESC;
    mock.onGet(`/post/${page}/${limit}/${order}`)
        .reply(HttpStatus.OK, postData);
    const store = mockStore({});
    const expectedActions = [
      ...expectedActionsMock,
      {type: post.FILL_POSTS_ARRAY, posts: postData.data},
      {type: post.SET_POST_TOTAL, total: 1},
    ];
    return store.dispatch(post.getAll(page, limit)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create FILL_POSTS_ARRAY action (async getLast)', () => {
    const postData = [{title: 'TEST_POST_TITLE'}];
    mock.onGet('/post').reply(HttpStatus.OK, postData);
    const store = mockStore({});
    const expectedActions = [
      ...expectedActionsMock,
      {type: post.FILL_POSTS_ARRAY, posts: postData},
    ];
    return store.dispatch(post.getLast()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create SELECT_POST action (async getById)', () => {
    const id = 1;
    const postData = {title: 'TEST_POST_TITLE'};
    mock.onGet('/post', {
      params: {id},
    }).reply(HttpStatus.OK, postData);
    const expectedActions = [
      ...expectedActionsMock,
      {type: post.SELECT_POST, post: postData},
    ];
    const store = mockStore();
    return store.dispatch(post.getById(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create ADD_POST action (async create)', () => {
    const newPost = {title: 'TEST_POST_TITLE'};
    const postResult = {id: 1, ...newPost};
    mock.onPost('/post').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(newPost));
      return [HttpStatus.CREATED, postResult];
    });
    const expectedActions = [
      ...expectedActionsMock,
      {type: post.ADD_POST, post: postResult},
    ];
    const store = mockStore();
    return store.dispatch(post.create(newPost)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create UPDATE_POST action (async update)', () => {
    const updatedPost = {title: 'TEST_POST_TITLE'};
    mock.onPut('/post').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(updatedPost));
      return [HttpStatus.NO_CONTENT];
    });
    const expectedActions = [
      ...expectedActionsMock,
      {type: post.UPDATE_POST, post: updatedPost},
    ];
    const store = mockStore();
    return store.dispatch(post.update(updatedPost)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create REMOVE_POST action (async remove)', () => {
    const id = 1;
    mock.onDelete('/post').reply((config) => {
      const {headers, params} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(params.id).toBe(id);
      return [HttpStatus.NO_CONTENT];
    });
    const expectedActions = [
      ...expectedActionsMock,
      {type: post.REMOVE_POST, id},
    ];
    const store = mockStore();
    return store.dispatch(post.remove(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });
});
