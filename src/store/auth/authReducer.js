import * as auth from './authActions';

export const initialState = {
  accessToken: '',
  refreshToken: '',
  isAuthorized: false,
  isFetch: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case auth.TOGGLE_AUTH_FETCH:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    case auth.MAKE_AUTH:
      return {
        ...state,
        ...action.auth,
        isAuthorized: true,
      };
    case auth.CLEAR_AUTH:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
