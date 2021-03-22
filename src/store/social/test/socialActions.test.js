import * as social from '../socialActions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import {Filter} from '../../../api/filters';
import {HttpStatus} from '../../../api/status';

const mockStore = configureStore([thunk]);

describe('Social actions creators', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('Should create TOGGLE_SOCIAL_FETCH action', () => {
    const expectedActions = [{type: social.TOGGLE_SOCIAL_FETCH}];
    const store = mockStore({});
    store.dispatch(social.toggleFetch());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create ADD_SOCIAL action', () => {
    const socialData = {title: 'TEST_SOCIAL_TITLE'};
    const expectedActions = [{type: social.ADD_SOCIAL, social: socialData}];
    const store = mockStore({});
    store.dispatch(social.addSocial(socialData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_SOCIALS_ARRAY action', () => {
    const socialData = {title: 'TEST_SOCIAL_TITLE'};
    const expectedActions = [
      {type: social.FILL_SOCIALS_ARRAY, socials: [socialData]},
    ];
    const store = mockStore({});
    store.dispatch(social.fillSocialsArray([socialData]));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create UPDATE_SOCIAL action', () => {
    const socialData = {title: 'TEST_SOCIAL_TITLE'};
    const expectedActions = [
      {type: social.UPDATE_SOCIAL, social: socialData},
    ];
    const store = mockStore({});
    store.dispatch(social.updateSocial(socialData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create REMOVE_SOCIAL action', () => {
    const id = 1;
    const expectedActions = [
      {type: social.REMOVE_SOCIAL, id},
    ];
    const store = mockStore({});
    store.dispatch(social.removeSocial(id));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_SOCIALS_ARRAY action (async getAll)', () => {
    const socialData = {title: 'TEST_SOCIAL_TITLE'};
    mock.onGet('/social', {
      params: {
        order: Filter.DESC,
      },
    }).reply(HttpStatus.OK, [socialData]);
    const expectedActions = [
      {type: social.TOGGLE_SOCIAL_FETCH},
      {type: social.FILL_SOCIALS_ARRAY, socials: [socialData]},
      {type: social.TOGGLE_SOCIAL_FETCH},
    ];
    const store = mockStore({});
    return store.dispatch(social.getAll()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create ADD_SOCIAL action (async create)', () => {
    const newSocial = {title: 'TEST_SOCIAL_TITLE'};
    const socialResult = {id: 1, ...newSocial};
    mock.onPost('/social').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(newSocial));
      return [HttpStatus.CREATED, socialResult];
    });
    const expectedActions = [
      {type: social.TOGGLE_SOCIAL_FETCH},
      {type: social.ADD_SOCIAL, social: socialResult},
      {type: social.TOGGLE_SOCIAL_FETCH},
    ];
    const store = mockStore({});
    return store.dispatch(social.create(newSocial)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create UPDATE_SOCIAL action (async update)', () => {
    const updatedSocial = {title: 'TEST_SOCIAL_TITLE'};
    mock.onPut('/social').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(updatedSocial));
      return [HttpStatus.NO_CONTENT];
    });
    const expectedActions = [
      {type: social.TOGGLE_SOCIAL_FETCH},
      {type: social.UPDATE_SOCIAL, social: updatedSocial},
      {type: social.TOGGLE_SOCIAL_FETCH},
    ];
    const store = mockStore({});
    return store.dispatch(social.update(updatedSocial)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create REMOVE_SOCIAL action (async update)', () => {
    const id = 1;
    mock.onDelete('/social').reply((config) => {
      const {headers, params} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(params.id).toBe(id);
      return [HttpStatus.NO_CONTENT];
    });
    const expectedActions = [
      {type: social.TOGGLE_SOCIAL_FETCH},
      {type: social.REMOVE_SOCIAL, id},
      {type: social.TOGGLE_SOCIAL_FETCH},
    ];
    const store = mockStore({});
    return store.dispatch(social.remove(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
