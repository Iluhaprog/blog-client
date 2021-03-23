import * as uuid from 'uuid';
import * as message from '../messageActions';
import configureStore from 'redux-mock-store';
import {MessageTypes} from '../MessageTypes';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const mockStore = configureStore();

describe('Message actions creator', () => {
  const messageId = 'TEST_MESSAGE_ID';

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => messageId);
  });

  test('Should create ADD_MESSAGE action', () => {
    const expectedActions = [
      {
        type: message.ADD_MESSAGE,
        message: {
          id: messageId,
          type: MessageTypes.DEFAULT,
          data: {},
        },
      },
    ];
    const store = mockStore({});
    store.dispatch(message.addMessage());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create REMOVE_MESSAGE action', () => {
    const id = messageId;
    const expectedActions = [{type: message.REMOVE_MESSAGE, id}];
    const store = mockStore();
    store.dispatch(message.removeMessage(id));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  })
});
