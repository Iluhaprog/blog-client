import * as file from '../../api/file';
import * as error from '../error/errorActions';
import {
  createDeclarator,
  createFetchToggler,
} from '../../utils/decorators/decorators';

export const TOGGLE_FILE_FETCH = 'TOGGLE_FILE_FETCH';
export const FILL_FILES_ARRAY = 'FILL_FILES_ARRAY';
export const ADD_FILE = 'ADD_FILE';
export const REMOVE_FILE = 'REMOVE_FILE';

export const toggleFetch = createFetchToggler(TOGGLE_FILE_FETCH);

export const fillFilesArray = (files) => ({
  type: FILL_FILES_ARRAY,
  files,
});

export const addFile = (file) => ({
  type: ADD_FILE,
  file,
});

export const removeFile = (id) => ({
  type: REMOVE_FILE,
  id,
});

const fileAsynActionCreator = createDeclarator(
    toggleFetch,
    error.addError,
);

export const getAll = fileAsynActionCreator(
    (dispatch, page, limit) => {
      return file.getAll(page, limit).then((response) => {
        const {data} = response;
        dispatch(fillFilesArray(data));
      });
    },
);

export const create = fileAsynActionCreator(
    (dispatch, formData, dirId) => {
      return file.create(formData, dirId).then((response) => {
        const {data} = response;
        dispatch(addFile(data));
      });
    },
);

export const remove = fileAsynActionCreator(
    (dispatch, id) => {
      return file.remove(id).then((response) => {
        dispatch(removeFile(id));
      });
    },
);
