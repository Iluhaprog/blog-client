import {
    addError,
    clearErrors,
    showError,
} from '../../actoins/error';
import errorReducer from '../ErrorReducer';

const initErrorState = {
    array: [],
};

describe('Test error reducer', () => {
    test('Should return init state', () => {
        expect(errorReducer(undefined, {})).toEqual(initErrorState);
    });

    test('Should handle ADD_ERROR action', () => {
        const er = new Error('test');
        expect(errorReducer(initErrorState, addError(er))).toEqual({
            array: [
                {
                    id: 1,
                    showed: false,
                    error: er,
                },
            ],
        })
    });

    test('Should handle CLEAR_ERROR action', () => {
        const er = new Error('test');
        const init = {
            array: [
                {
                    id: 1,
                    showed: false,
                    error: er,
                },
            ],
        };
        expect(errorReducer(init, clearErrors())).toEqual(initErrorState);
    });

    test('Should handle SHOW_ERROR action', () => {
        const er = new Error('test');
        const init = {
            array: [
                {
                    id: 1,
                    showed: false,
                    error: er,
                },
            ],
        };
        expect(errorReducer(init, showError(1))).toEqual({
            array: [
                {
                    id: 1,
                    showed: true,
                    error: er,
                },
            ],
        });
    });
});
