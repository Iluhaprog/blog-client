import configureMockStore from 'redux-mock-store';

import {
    ADD_ERROR,
    CLEAR_ERRORS,
    SHOW_ERROR,
} from '../error';

import {
    addError,
    clearErrors,
    showError,
} from '../error';

const mockStore = configureMockStore();

describe('Test sync action creators', () => {
    test('Should create ADD_ERROR action', () => {
        const store = mockStore();
        const error = new Error('test');
        const expectedActions = [{ type: ADD_ERROR, error }];
        store.dispatch(addError(error));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create CLEAR_ERROR action', () => {
        const store = mockStore();
        const expectedActions = [{ type: CLEAR_ERRORS }];
        store.dispatch(clearErrors());
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create SHOW_ERROR action', () => {
        const store = mockStore();
        const id = 1;
        const expectedActions = [{ type: SHOW_ERROR, id }];
        store.dispatch(showError(id));
        expect(store.getActions()).toEqual(expectedActions);
    });
});