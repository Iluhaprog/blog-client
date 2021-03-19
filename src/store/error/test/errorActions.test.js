import configureStore from 'redux-mock-store';
import * as error from '../errorActions';

const mockStore = configureStore();

describe('Error action creators', () => {
  test('Should create ADD_ERROR action', () => {
    const store = mockStore({});

    const testError = new Error('TEST_ERROR');
    const expectedActions = [{type: error.ADD_ERROR, error: testError}];

    store.dispatch(error.addError(testError));
    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);
  });

  test('Should create REMOVE_ERROR action', () => {
    const store = mockStore({});

    const id = 1;
    const expectedActions = [{type: error.REMOVE_ERROR, id}];

    store.dispatch(error.removeError(id));
    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);
  });

  test('Should create REMOVE_ALL_ERRORS', () => {
    const store = mockStore({});

    const expectedActions = [{type: error.REMOVE_ALL_ERRORS}];

    store.dispatch(error.removeAllErrors());
    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);
  });
});
