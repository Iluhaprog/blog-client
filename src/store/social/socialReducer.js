import * as social from './socialActions';

export const initialState = {
  socials: [],
  isFetch: false,
};

export const socialReducer = (state = initialState, action) => {
  switch (action.type) {
    case social.TOGGLE_SOCIAL_FETCH:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    case social.ADD_SOCIAL:
      return {
        ...state,
        socials: [
          action.social,
          ...state.socials,
        ],
      };
    case social.UPDATE_SOCIAL:
      return {
        ...state,
        socials: state.socials.map((social) => {
          return social.id === action.social.id ? action.social : social;
        }),
      };
    case social.FILL_SOCIALS_ARRAY:
      return {
        ...state,
        socials: [...action.socials],
      };
    case social.REMOVE_SOCIAL:
      return {
        ...state,
        socials: state.socials.filter((social) => social.id !== action.id),
      };
    default:
      return {
        ...state,
      };
  }
};
