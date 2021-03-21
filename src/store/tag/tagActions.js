import * as tag from '../../api/tag';
import * as error from '../error/errorActions';
import {
  createDeclarator,
  createFetchToggler,
} from '../../utils/decorators/decorators';

export const TOGGLE_TAG_FETCH = 'TOGGLE_TAG_FETCH';
export const ADD_TAG = 'ADD_TAG';
export const FILL_TAGS_ARRAY = 'FILL_TAGS_ARRAY';
export const REMOVE_TAG = 'REMOVE_TAG';

export const toggleFetch = createFetchToggler(TOGGLE_TAG_FETCH);

export const addTag = (tag) => ({
  type: ADD_TAG,
  tag,
});

export const fillTagsArray = (tags) => ({
  type: FILL_TAGS_ARRAY,
  tags,
});

export const removeTag = (id) => ({
  type: REMOVE_TAG,
  id,
});

const tagAsyncActionCreator = createDeclarator(
    toggleFetch,
    error.addError,
);

export const getAll = tagAsyncActionCreator(
    (dispatch) => {
      return tag.getAll().then((response) => {
        const {data} = response;
        dispatch(fillTagsArray(data));
      });
    },
);

export const create = tagAsyncActionCreator(
    (dispatch, newTag) => {
      return tag.create(newTag).then((response) => {
        const {data} = response;
        dispatch(addTag(data));
      });
    },
);

export const remove = tagAsyncActionCreator(
    (dispatch, id) => {
      return tag.remove(id).then((response) => {
        dispatch(removeTag(id));
      });
    },
);
