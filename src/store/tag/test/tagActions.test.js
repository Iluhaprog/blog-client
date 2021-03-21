import * as tag from '../tagActions';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {Filter} from '../../../api/filters';
import {HttpStatus} from '../../../api/status';

const mockStore = configureStore([thunk]);

describe('Tag action creator', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  beforeEach(() => {
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
    mock.onGet('/tag', {
      params: {
        order: Filter.DESC,
      },
    }).reply(HttpStatus.OK, [tagData]);
    const store = mockStore({});
    const expectedActions = [
      {type: tag.TOGGLE_TAG_FETCH},
      {type: tag.FILL_TAGS_ARRAY, tags: [tagData]},
      {type: tag.TOGGLE_TAG_FETCH},
    ];

    return store.dispatch(tag.getAll()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
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
    const store = mockStore({});
    const expectedActions = [
      {type: tag.TOGGLE_TAG_FETCH},
      {type: tag.ADD_TAG, tag: tagResult},
      {type: tag.TOGGLE_TAG_FETCH},
    ];
    return store.dispatch(tag.create(newTag)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create REMOVE_TAG action (async remove)', () => {
    const id = 1;
    mock.onDelete('/tag').reply((config) => {
      const {headers, params} = config;
      expect(params.id).toBe(id);
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.NO_CONTENT];
    });
    const store = mockStore({});
    const expectedActions = [
      {type: tag.TOGGLE_TAG_FETCH},
      {type: tag.REMOVE_TAG, id},
      {type: tag.TOGGLE_TAG_FETCH},
    ];
    return store.dispatch(tag.remove(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
