import * as directory from '../../api/directory';
import * as message from '../message/messageActions';
import {
  createDeclarator,
  createFetchToggler,
} from '../../utils/decorators/decorators';

export const TOGGLE_DIR_FETCH = 'TOGGLE_DIR_FETCH';
export const ADD_DIR = 'ADD_DIR';
export const FILL_DIRS_ARRAY = 'FILL_DIRS_ARRAY';
export const REMOVE_DIR = 'REMOVE_DIR';

export const toggleFetch = createFetchToggler(TOGGLE_DIR_FETCH);

export const addDir = (dir) => ({
  type: ADD_DIR,
  dir,
});

export const fillDirsArray = (dirs) => ({
  type: FILL_DIRS_ARRAY,
  dirs,
});

export const removeDir = (id) => ({
  type: REMOVE_DIR,
  id,
});

const dirAsyncActionCreator = createDeclarator(
    toggleFetch,
    message.addMessage,
);

export const getAll = dirAsyncActionCreator(
    (dispatch, page, limit) => {
      return directory.getAll(page, limit).then((response) => {
        const {data} = response;
        dispatch(fillDirsArray(data));
      });
    },
);

export const create = dirAsyncActionCreator(
    (dispatch, dir) => {
      return directory.create(dir).then((response) => {
        const {data} = response;
        dispatch(addDir(data));
      });
    },
);

export const remove = dirAsyncActionCreator(
    (dispatch, id) => {
      return directory.remove(id).then((_) => {
        dispatch(removeDir(id));
      });
    },
);

