import * as uuid from 'uuid';
import {initialState, errorReducer} from '../errorReducer';
import * as error from '../errorActions';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('Error reducer', () => {
  const errorId = 'TEST_ERROR_ID';

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => errorId);
  });

  test('Should handle ADD_ERROR action', () => {
    const err = new Error('TEST_ERROR');
    const result = errorReducer(initialState, error.addError(err));

    expect(result).toEqual({
      errors: [{
        id: errorId,
        error: err,
      }],
    });
  });

  test('Should handle REMOVE_ERROR action', () => {
    const err = new Error('TEST_ERROR');
    const state = {
      errors: [{
        id: uuid.v4(),
        error: err,
      }],
    };
    const result = errorReducer(state, error.removeError(errorId));

    expect(result).toEqual(initialState);
  });

  test('Should handle REMOVE_ALL_ERRORS action', () => {
    const err = new Error('TEST_ERROR');
    const state = {
      errors: [{
        id: uuid.v4(),
        error: err,
      }, {
        id: uuid.v4(),
        error: err,
      }],
    };
    const result = errorReducer(state, error.removeAllErrors());

    expect(result).toEqual(initialState);
  });
});
