import {
  initialState,
  messageReducer,
} from '../messageReducer';
import * as message from '../messageActions';
import * as uuid from 'uuid';
import {MessageTypes} from '../MessageTypes';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('messageReduser', () => {
  const messageId = 'TEST_MESSAGE_ID';

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => messageId);
  });

  test('Should handle ADD_MESSAGE action', () => {
    const result = messageReducer(initialState, message.addMessage());
    expect(result).toEqual({
      ...initialState,
      messages: [
        {
          id: messageId,
          type: MessageTypes.DEFAULT,
          data: {},
        },
      ],
    });
  });

  test('Should handle REMOVE_MESSAGE action', () => {
    const state = {
      ...initialState,
      messages: [
        {
          id: messageId,
          type: MessageTypes.DEFAULT,
          data: {},
        },
      ],
    };
    const result = messageReducer(state, message.removeMessage(messageId));
    expect(result).toEqual(initialState);
  });
});
