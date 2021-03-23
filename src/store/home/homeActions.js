import * as home from '../../api/home';
import * as message from '../message/messageActions';
import {
  createDeclarator,
  createFetchToggler,
} from '../../utils/decorators/decorators';

export const TOGGLE_HOME_FETCH = 'TOGGLE_HOME_FETCH';
export const SELECT_HOME = 'SELECT_HOME';
export const ADD_HOME = 'ADD_HOME';
export const UPDATE_HOME = 'UPDATE_HOME';
export const FILL_HOMES_ARRAY = 'FILL_HOMES_ARRAY';
export const REMOVE_HOME = 'REMOVE_HOME';

export const toggleFetch = createFetchToggler(TOGGLE_HOME_FETCH);

export const selectHome = (home) => ({
  type: SELECT_HOME,
  home,
});

export const addHome = (home) => ({
  type: ADD_HOME,
  home,
});

export const fillHomesArray = (homes) => ({
  type: FILL_HOMES_ARRAY,
  homes,
});

export const updateHome = (home) => ({
  type: UPDATE_HOME,
  home,
});

export const removeHome = (id) => ({
  type: REMOVE_HOME,
  id,
});

const homeAsyncActionCreator = createDeclarator(
    toggleFetch,
    message.addMessage,
);

export const getAll = homeAsyncActionCreator(
    (dispatch) => {
      return home.getAll().then((response) => {
        const {data} = response;
        dispatch(fillHomesArray(data));
      });
    },
);

export const getOne = homeAsyncActionCreator(
    (dispatch) => {
      return home.getOne().then((response) => {
        const {data} = response;
        dispatch(selectHome(data));
      });
    },
);

export const create = homeAsyncActionCreator(
    (dispatch, homeData) => {
      return home.create(homeData).then((response) => {
        const {data} = response;
        dispatch(addHome(data));
      });
    },
);

export const update = homeAsyncActionCreator(
    (dispatch, homeData) => {
      return home.update(homeData).then(() => {
        dispatch(updateHome(homeData));
      });
    },
);

export const remove = homeAsyncActionCreator(
    (dispatch, id) => {
      return home.remove(id).then(() => {
        dispatch(removeHome(id));
      });
    },
);
