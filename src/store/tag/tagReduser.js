import * as tag from './tagActions';

export const initialState = {
  tags: [],
  isFetch: false,
};

export const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case tag.TOGGLE_TAG_FETCH:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    case tag.ADD_TAG:
      return {
        ...state,
        tags: [action.tag, ...state.tags],
      };
    case tag.FILL_TAGS_ARRAY:
      return {
        ...state,
        tags: [...action.tags],
      };
    case tag.REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter((tag) => tag.id !== action.id),
      };
    default:
      return {
        ...state,
      };
  }
};
