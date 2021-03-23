import * as post from '../../api/post';
import * as message from '../message/messageActions';
import {
  createDeclarator,
  createFetchToggler,
} from '../../utils/decorators/decorators';

export const TOGGLE_POST_FETCH = 'TOGGLE_POST_FETCH';
export const SELECT_POST = 'SELECT_POST';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const FILL_POSTS_ARRAY = 'FILL_POSTS_ARRAY';
export const SET_POST_TOTAL = 'SET_POST_TOTAL';
export const REMOVE_POST = 'REMOVE_POST';

export const toggleFetch = createFetchToggler(TOGGLE_POST_FETCH);

export const selectPost = (post) => ({
  type: SELECT_POST,
  post,
});

export const addPost = (post) => ({
  type: ADD_POST,
  post,
});

export const updatePost = (post) => ({
  type: UPDATE_POST,
  post,
});

export const fillPostsArray = (posts) => ({
  type: FILL_POSTS_ARRAY,
  posts,
});

export const setPostTotal = (total) => ({
  type: SET_POST_TOTAL,
  total,
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  id,
});

const postAsyncActionCreator = createDeclarator(
    toggleFetch,
    message.addMessage,
);

export const getByTags = postAsyncActionCreator(
    (dispatch, tags) => {
      return post.getByTags(tags).then((response) => {
        const {data} = response;
        dispatch(fillPostsArray(data));
      });
    },
);

export const getAll = postAsyncActionCreator(
    (dispatch, page, limit, order) => {
      return post.getAll(page, limit, order).then((response) => {
        const {data} = response;
        dispatch(fillPostsArray(data.data));
        dispatch(setPostTotal(data.total));
      });
    },
);

export const getById = postAsyncActionCreator(
    (dispatch, id) => {
      return post.getById(id).then((response) => {
        const {data} = response;
        dispatch(selectPost(data));
      });
    },
);

export const getLast = postAsyncActionCreator(
    (dispatch) => {
      return post.getLast().then((respose) => {
        const {data} = respose;
        dispatch(fillPostsArray(data));
      });
    },
);

export const create = postAsyncActionCreator(
    (dispatch, postData) => {
      return post.create(postData).then((response) => {
        const {data} = response;
        dispatch(addPost(data));
      });
    },
);

export const update = postAsyncActionCreator(
    (dispatch, postData) => {
      return post.update(postData).then((response) => {
        dispatch(updatePost(postData));
      });
    },
);

export const remove = postAsyncActionCreator(
    (dispatch, id) => {
      return post.remove(id).then((response) => {
        dispatch(removePost(id));
      });
    },
);
