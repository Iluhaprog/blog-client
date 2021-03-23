import * as uuid from 'uuid';
import * as social from '../socialActions';
import * as message from '../../message/messageActions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import {Filter} from '../../../api/filters';
import {HttpStatus} from '../../../api/status';
import {MessageTypes} from '../../message/MessageTypes';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const mockStore = configureStore([thunk]);

describe('Social actions creators', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  const messageId = 'TEST_MESSAGE_ID';
  const expectedActionsMock = [
    {type: social.TOGGLE_SOCIAL_FETCH},
    {
      type: message.ADD_MESSAGE,
      message: {
        id: messageId,
        type: MessageTypes.SUCCESS,
        data: {},
      },
    },
    {type: social.TOGGLE_SOCIAL_FETCH},
  ];

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => messageId);
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
      ...expectedActionsMock,
      {type: social.FILL_SOCIALS_ARRAY, socials: [socialData]},
    ];
    const store = mockStore({});
    return store.dispatch(social.getAll()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
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
      ...expectedActionsMock,
      {type: social.ADD_SOCIAL, social: socialResult},
    ];
    const store = mockStore({});
    return store.dispatch(social.create(newSocial)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
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
      ...expectedActionsMock,
      {type: social.UPDATE_SOCIAL, social: updatedSocial},
    ];
    const store = mockStore({});
    return store.dispatch(social.update(updatedSocial)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
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
      ...expectedActionsMock,
      {type: social.REMOVE_SOCIAL, id},
    ];
    const store = mockStore({});
    return store.dispatch(social.remove(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });
});
