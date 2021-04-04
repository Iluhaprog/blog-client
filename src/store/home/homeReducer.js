import * as home from './homeActions';

export const initialState = {
  selected: {},
  homes: [],
  isFetch: false,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case home.TOGGLE_HOME_FETCH:
      return {
        ...state,
        isFetch: true,
      };
    case home.SELECT_HOME:
      return {
        ...state,
        selected: action.home,
      };
    case home.FILL_HOMES_ARRAY:
      return {
        ...state,
        homes: [...action.homes],
      };
    case home.ADD_HOME:
      return {
        ...state,
        homes: [action.home, ...state.homes],
      };
    case home.UPDATE_HOME:
      return {
        ...state,
        homes: state.homes.map((home) => {
          return home.id === action.home.id ? action.home : home;
        }),
      };
    case home.REMOVE_HOME:
      return {
        ...state,
        homes: state.homes.filter((home) => home.id !== action.id),
      };
    default:
      return {
        ...state,
      };
  }
};
