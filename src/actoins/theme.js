export const SET_THEME = 'SET_THEME';

export const setDarkTheme = () => ({
    type: SET_THEME,
    theme: 'dark',
});

export const setLightTheme = () => ({
    type: SET_THEME,
    theme: 'light',
});