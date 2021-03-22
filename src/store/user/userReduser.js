import * as user from './userActions';

export const initialState = {
  data: {},
  users: [],
  isFetch: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case user.TOGGLE_USER_FETCH:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    case user.SET_USER_DATA:
      return {
        ...state,
        data: action.user,
      };
    case user.ADD_USER:
      return {
        ...state,
        users: [action.user, ...state.users],
      };
    case user.FILL_USERS_ARRAY:
      return {
        ...state,
        users: [...action.users],
      };
    case user.UPDATE_USER:
      return {
        ...state,
        data: state.data.id ? action.user : {},
        users: state.users.map((user) => {
          return user.id === action.user.id ? action.user : user;
        }),
      };
    default:
      return {
        ...state,
      };
  }
};
