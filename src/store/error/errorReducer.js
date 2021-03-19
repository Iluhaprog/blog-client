import {v4 as uuidv4} from 'uuid';
import * as errors from './errorActions';

export const initialState = {
  errors: [],
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case errors.ADD_ERROR:
      return {
        errors: [
          ...state.errors,
          {
            id: uuidv4(),
            error: action.error,
          },
        ],
      };
    case errors.REMOVE_ERROR:
      return {
        errors: state.errors.filter((error) => error.id !== action.id),
      };
    case errors.REMOVE_ALL_ERRORS:
      return {
        errors: [],
      };
  }
};
