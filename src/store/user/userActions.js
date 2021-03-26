import * as user from '../../api/user';
import * as message from '../message/messageActions';
import {
  createDeclarator,
  createFetchToggler,
} from '../../utils/decorators/decorators';

export const TOGGLE_USER_FETCH = 'TOGGLE_USER_FETCH';
export const SET_USER_DATA = 'SET_USER_DATA';
export const ADD_USER = 'ADD_USER';
export const FILL_USERS_ARRAY = 'FILL_USERS_ARRAY';
export const UPDATE_USER = 'UPDATE_USER';

export const toggleFetch = createFetchToggler(TOGGLE_USER_FETCH);

export const setUserData = (user) => ({
  type: SET_USER_DATA,
  user,
});

export const fillUsersArray = (users) => ({
  type: FILL_USERS_ARRAY,
  users,
});

export const addUser = (user) => ({
  type: ADD_USER,
  user,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});

const userAsyncActionCreator = createDeclarator(
    toggleFetch,
    message.addMessage,
);

export const getAll = userAsyncActionCreator(
    (dispatch) => {
      return user.getAll().then((response) => {
        const {data} = response;
        dispatch(fillUsersArray(data));
      });
    },
);

export const getCurrent = userAsyncActionCreator(
    (dispatch) => {
      return user.getCurrent().then((response) => {
        const {data} = response;
        dispatch(setUserData(data));
      });
    },
);

export const getById = userAsyncActionCreator(
    (dispatch, id) => {
      return user.getById(id).then((response) => {
        const {data} = response;
        dispatch(setUserData(data));
      });
    },
);

export const create = userAsyncActionCreator(
    (dispatch, userData) => {
      return user.create(userData).then((response) => {
        const {data} = response;
        dispatch(addUser(data));
      });
    },
);

export const update = userAsyncActionCreator(
    (dispatch, userData) => {
      return user.update(userData).then(() => {
        dispatch(updateUser(userData));
      });
    },
);

export const updatePassword = userAsyncActionCreator(
    (dispatch, creds) => {
      return user.updatePassword(creds);
    },
);
