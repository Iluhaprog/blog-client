import * as social from '../../api/social';
import * as error from '../error/errorActions';
import {
  createDeclarator,
  createFetchToggler,
} from '../../utils/decorators/decorators';

export const TOGGLE_SOCIAL_FETCH = 'TOGGLE_SOCIAL_FETCH';
export const ADD_SOCIAL = 'ADD_SOCIAL';
export const FILL_SOCIALS_ARRAY = 'FILL_SOCIALS_ARRAY';
export const UPDATE_SOCIAL = 'UPDATE_SOCIAL';
export const REMOVE_SOCIAL = 'REMOVE_SOCIAL';

export const toggleFetch = createFetchToggler(TOGGLE_SOCIAL_FETCH);

export const addSocial = (social) => ({
  type: ADD_SOCIAL,
  social,
});

export const updateSocial = (social) => ({
  type: UPDATE_SOCIAL,
  social,
});

export const fillSocialsArray = (socials) => ({
  type: FILL_SOCIALS_ARRAY,
  socials,
});

export const removeSocial = (id) => ({
  type: REMOVE_SOCIAL,
  id,
});

const socialAsyncActionCreator = createDeclarator(
    toggleFetch,
    error.addError,
);

export const getAll = socialAsyncActionCreator(
    (dispatch, order) => {
      return social.getAll(order).then((response) => {
        const {data} = response;
        dispatch(fillSocialsArray(data));
      });
    },
);

export const create = socialAsyncActionCreator(
    (dispatch, socialData) => {
      return social.create(socialData).then((response) => {
        const {data} = response;
        dispatch(addSocial(data));
      });
    },
);

export const update = socialAsyncActionCreator(
    (dispatch, socialData) => {
      return social.update(socialData).then(() => {
        dispatch(updateSocial(socialData));
      });
    },
);

export const remove = socialAsyncActionCreator(
    (dispatch, id) => {
      return social.remove(id).then(() => {
        dispatch(removeSocial(id));
      });
    },
);
