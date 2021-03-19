import {
  initialState,
  dirReducer,
} from '../directoryReducer';

import * as dir from '../directoryActions';

describe('directoryReducer', () => {
  test('Should handle TOGGLE_DIR_FETCH action', () => {
    const result = dirReducer(initialState, dir.toggleFetch());
    expect(result).toEqual({
      ...initialState,
      isFetch: true,
    });
  });

  test('Should handle ADD_DIR action', () => {
    const testDir = {name: 'TEST_DIR'};
    const state1 = Array(10).fill(testDir);
    const result1 = dirReducer(initialState, dir.addDir(testDir));
    const result2 = dirReducer({
      ...initialState,
      directories: state1,
    }, dir.addDir(testDir));

    expect(result1).toEqual({
      ...initialState,
      directories: [testDir],
    });

    expect(result2).toEqual({
      ...initialState,
      directories: state1,
    });
  });

  test('Should handle FILL_DIRS_ARRAY action', () => {
    const testDir = {name: 'TEST_DIR'};
    const dirs = Array(10).fill(testDir);
    const result = dirReducer(initialState, dir.fillDirsArray(dirs));

    expect(result).toEqual({
      ...initialState,
      directories: dirs,
    });
  });

  test('Should handle REMOVE_DIR action', () => {
    const id = 1;
    const testDir = {id, name: 'TEST_DIR'};
    const state = {
      ...initialState,
      directories: [testDir],
    };
    const result = dirReducer(state, dir.removeDir(id));

    expect(result).toEqual(initialState);
  });
});
