import configureMockStore from 'redux-mock-store'
import { setModal, setFail, clearModal } from '../modal'

const mockStore = configureMockStore([]);

describe('Test sync action creators', () => {
    const modal = {
        text: 'Test',
        withInput: true,
        handleSuccess: () => {},
        visible: true,
        fail: {},
    };
    test('Should create SET_MODAL action', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'SET_MODAL', modal: {...modal} }];
        store.dispatch(setModal(modal));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create CLEAR_MODAL action', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'CLEAR_MODAL' }];
        store.dispatch(clearModal());
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create SET_FAIL action', () => {
        const store = mockStore();
        const message = 'test fail';
        const expectedActions = [{ type: 'SET_FAIL', message }];
        store.dispatch(setFail(message));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
