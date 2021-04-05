import * as win from './windowActions';

export const initialState = {
  windowList: [],
};

export const windowReducer = (state = initialState, action) => {
  switch (action.type) {
    case win.ADD_WINDOW:
      return {
        windowList: [...state.windowList, action.windowData],
      };
    case win.REMOVE_WINDOW:
      return {
        windowList: state.windowList.filter((win) => win.id !== action.id),
      };
    case win.UPDATE_WINDOW:
      return {
        windowList: state.windowList.map((win) => {
          if (win.id === action.id) {
            return {
              ...win,
              content: action.content,
            };
          }
          return win;
        }),
      };
    default:
      return {
        ...state,
      };
  }
};
