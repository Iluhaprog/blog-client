import {
    setFail,
    setModal,
    clearModal,
} from '../../actoins/modal';
import modalReducer from '../ModalReducer'

const initModalState = {
    text: '',
    withInput: false,
    handleSuccess: () => {},
    visible: false,
    fail: {},
};

describe('Test for comment reducer', () => {
    const modal = {
        text: 'Test',
        withInput: true,
        handleSuccess: () => 'handle',
        visible: true,
        fail: {},
    };

    test('Should return init state', () => {
        const modal = modalReducer(undefined, {});
        expect(JSON.stringify(modal)).toBe(JSON.stringify(initModalState));
    });

    test('Should handle SET_FAIL action', () => {
        const testMsg = 'test message';
        const result = modalReducer(initModalState, setFail(testMsg));
        expect(result).toEqual({
            ...initModalState,
            fail: {
                message: testMsg,
            },
        });
    });

    test('Should handle SET_MODAL action', () => {
        const result = modalReducer(initModalState, setModal(modal));
        expect(result).toEqual({
            ...initModalState,
            ...modal,
        });
    });

    test('Should handle CLEAR_MODAL action', () => {
        const result = modalReducer(modal, clearModal());
        expect(JSON.stringify(result)).toBe(JSON.stringify(initModalState));
    });
});