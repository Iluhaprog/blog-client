import * as dir from './directoryActions';
import {removeLast} from '../../utils/array';

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
          ...removeLast(state.directories, (arr) => {
            const maxLength = process.env.REACT_APP_PAGINATION_LIMIT;
            return arr.length >= maxLength;
          }),
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
