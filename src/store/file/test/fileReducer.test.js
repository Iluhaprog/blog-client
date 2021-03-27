import {
  initialState,
  fileReducer,
} from '../fileReducer';

import * as file from '../fileActions';

describe('fileReducer', () => {
  test('Should handle TOGGLE_FILE_FETCH action', () => {
    const result = fileReducer(initialState, file.toggleFetch());
    expect(result).toEqual({
      ...initialState,
      isFetch: true,
    });
  });

  test('Should handle FILL_FILES_ARRAY action', () => {
    const files = [{name: 'TEST_FILE_NAME'}];
    const total = 1;
    const data = {
      data: files,
      total,
    };
    const result = fileReducer(initialState, file.fillFilesArray(data));
    expect(result).toEqual({
      ...initialState,
      files,
      total,
    });
  });

  test('Should handle ADD_FILE action', () => {
    const fileData = {name: 'TEST_FILE_NAME'};
    const result = fileReducer(initialState, file.addFile(fileData));
    expect(result).toEqual({
      ...initialState,
      files: [fileData],
    });
  });

  test('Should handle REMOVE_FILE action', () => {
    const fileData = {id: 1, name: 'TEST_FILE_NAME'};
    const state = {
      ...initialState,
      files: [fileData],
    };
    const result = fileReducer(state, file.removeFile(fileData.id));
    expect(result).toEqual(initialState);
  });
});
