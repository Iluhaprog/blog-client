import configureMockStore from 'redux-mock-store';
import { setDarkTheme, setLightTheme } from '../theme';

const mockStore = configureMockStore();

describe('Test theme action creators', () => {
    test('Sholud return SET_THEME action', () => {
        const expectedActions = [{ type: 'SET_THEME', theme: 'dark'}];
        const store = mockStore();
        store.dispatch(setDarkTheme());
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Sholud return SET_THEME action', () => {
        const expectedActions = [{ type: 'SET_THEME', theme: 'light'}];
        const store = mockStore();
        store.dispatch(setLightTheme());
        expect(store.getActions()).toEqual(expectedActions);
    });
});