import * as uuid from 'uuid';
import * as locale from '../localeActions';
import * as message from '../../message/messageActions';
import {MessageTypes} from '../../message/MessageTypes';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {HttpStatus} from '../../../api/status';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const mockStore = configureStore([thunk]);

describe('Locale action creator', () => {
  const mock = new MockAdapter(api);

  const messageId = 'TEST_MESSAGE_ID';
  const expectedActionsMock = [
    {type: locale.TOGGLE_LOCALE_FETCH},
    {
      type: message.ADD_MESSAGE,
      message: {
        id: messageId,
        type: MessageTypes.SUCCESS,
        data: {},
      },
    },
    {type: locale.TOGGLE_LOCALE_FETCH},
  ];

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => messageId);
  });

  test('Should create SET_LOCALE action', () => {
    const locales = [];
    const expectedActions = [{type: locale.SET_LOCALES, locales}];
    const store = mockStore();
    store.dispatch(locale.setLocales(locales));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create SET_LOCALE action (async getLocales)', () => {
    const locales = ['locale1', 'locale2'];
    mock.onGet(`/locale`).reply(HttpStatus.OK, locales);
    const store = mockStore();
    const expectedActions = [
      ...expectedActionsMock,
      {type: locale.SET_LOCALES, locales},
    ];
    return store.dispatch(locale.getLocales()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });
});
