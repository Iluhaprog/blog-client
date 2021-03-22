import * as project from '../../api/project';
import * as error from '../error/errorActions';
import {
  createDeclarator,
  createFetchToggler,
} from '../../utils/decorators/decorators';

export const TOGGLE_PROJECT_FETCH = 'TOGGLE_PROJECT_FETCH';
export const ADD_PROJECT = 'ADD_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const FILL_PROJECTS_ARRAY = 'FILL_PROJECTS_ARRAY';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const toggleFetch = createFetchToggler(TOGGLE_PROJECT_FETCH);

export const addProject = (project) => ({
  type: ADD_PROJECT,
  project,
});

export const updateProject = (project) => ({
  type: UPDATE_PROJECT,
  project,
});

export const fillProjectsArray = (projects) => ({
  type: FILL_PROJECTS_ARRAY,
  projects,
});

export const removeProject = (id) => ({
  type: REMOVE_PROJECT,
  id,
});

const projectAsyncActoinCreator = createDeclarator(
    toggleFetch,
    error.addError,
);

export const getAll = projectAsyncActoinCreator(
    (dispatch, order) => {
      return project.getAll(order).then((response) => {
        const {data} = response;
        dispatch(fillProjectsArray(data));
      });
    },
);

export const create = projectAsyncActoinCreator(
    (dispatch, projectData) => {
      return project.create(projectData).then((response) => {
        const {data} = response;
        dispatch(addProject(data));
      });
    },
);

export const update = projectAsyncActoinCreator(
    (dispatch, projectData) => {
      return project.update(projectData).then(() => {
        dispatch(updateProject(projectData));
      });
    },
);

export const remove = projectAsyncActoinCreator(
    (dispatch, id) => {
      return project.remove(id).then(() => {
        dispatch(removeProject(id));
      });
    },
);
