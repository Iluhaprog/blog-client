import {isError} from './refresh';
import {MessageTypes} from '../../../store/message/MessageTypes';

test('Should check for error message type', () => {
  const val1 = isError({type: MessageTypes.ERROR});
  const val2 = isError({type: MessageTypes.SUCCESS});
  expect(val1).toBe(true);
  expect(val2).toBe(false);
});
