import { loadState, saveState } from '../store';

test('Test save state function', () => {
    const value = { id: { id: 1 } };
    const strValue = JSON.stringify(value);
    saveState(value);
    expect(localStorage['state']).toBe(strValue);
});


test('Test load state function', () => {
    const value = { id: { id: 1 } };
    saveState(value);
    expect(loadState()).toEqual(value);
});