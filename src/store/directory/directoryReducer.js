import * as dir from './directoryActions';

export const initialState = {
  directories: [],
  total: 0,
  isFetch: false,
};

export const dirReducer = (state = initialState, action) => {
  switch (action.type) {
    case dir.TOGGLE_DIR_FETCH:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    case dir.ADD_DIR:
      return {
        ...state,
        directories: [
          action.dir,
          ...(() => {
            const maxLen = process.env.REACT_APP_PAGINATION_LIMIT;
            if (state.directories.length < maxLen) {
              return [...state.directories];
            }
            return [
              ...state.directories.slice(0, state.directories.length - 1),
            ];
          })(),
        ],
      };
    case dir.FILL_DIRS_ARRAY:
      return {
        ...state,
        directories: action.dirs,
      };
    case dir.REMOVE_DIR:
      return {
        ...state,
        directories: state.directories.filter((dir) => dir.id !== action.id),
      };
    default:
      return {
        ...state,
      };
  }
};
