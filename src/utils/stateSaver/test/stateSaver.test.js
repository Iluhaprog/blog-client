import {loadState, saveState} from '../stateSaver';

describe('State saver util', () => {
  test('Test save state function', () => {
    jest.spyOn(localStorage, 'setItem').mockReturnValue(undefined);
    const value = {id: {id: 1}};
    const strValue = JSON.stringify(value);
    saveState(value);
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toBeCalledWith('state', strValue);
  });

  test('Test load state function', () => {
    const value = {id: {id: 1}};
    jest.spyOn(localStorage, 'getItem').mockReturnValue(JSON.stringify(value));
    const result = loadState();
    expect(result).toEqual(value);
  });
});

