import * as file from './fileActions';

export const initialState = {
  files: [],
  total: 0,
  isFetch: false,
};

export const fileReduser = (state = initialState, action) => {
  switch (action.type) {
    case file.TOGGLE_FILE_FETCH:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    case file.FILL_FILES_ARRAY:
      return {
        ...state,
        files: action.files?.data || [],
        total: action.files?.total || 0,
      };
    case file.ADD_FILE:
      return {
        ...state,
        files: [
          action.file,
          ...state.files,
        ],
      };
    case file.REMOVE_FILE:
      return {
        ...state,
        files: state.files.filter((file) => file.id !== action.id),
      };
    default:
      return {
        ...state,
      };
  }
};
