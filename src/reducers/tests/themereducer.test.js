import themeReducer from '../ThemeReducer';
import { setLightTheme, setDarkTheme } from '../../actoins/theme';

const initThemeState = {
    theme: 'light'
};

describe('Test home reducer', () => {
    test('Should return default state', () => {
        expect(themeReducer(undefined, {})).toEqual(initThemeState);
    });

    test('Should handel SET_THEME(light) action', () => {
        expect(themeReducer(initThemeState, setLightTheme())).toEqual(initThemeState);
    });
    test('Should handel SET_THEME(dark) action', () => {
        expect(themeReducer(initThemeState, setDarkTheme())).toEqual({
            theme: 'dark'
        });
    });
});