import * as window from './windowActions';

export const initialState = {
  windowList: [],
};

export const windowReducer = (state = initialState, action) => {
  switch (action.type) {
    case window.ADD_WINDOW:
      return {
        windowList: [...state.windowList, action.windowData],
      };
    case window.REMOVE_WINDOW:
      return {
        windowList: state.windowList.filter((window) => window.id !== action.id),
      };
    default:
      return {
        ...state,
      };
  }
};
