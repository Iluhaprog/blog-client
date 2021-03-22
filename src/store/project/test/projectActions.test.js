import * as project from '../projectActions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import {Filter} from '../../../api/filters';
import {HttpStatus} from '../../../api/status';

const mockStore = configureStore([thunk]);

describe('Project actions creators', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('Should create TOGGLE_PROJECT_FETCH action', () => {
    const expectedActions = [{type: project.TOGGLE_PROJECT_FETCH}];
    const store = mockStore();
    store.dispatch(project.toggleFetch());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create ADD_PROJECT action', () => {
    const prjData = {title: 'TEST_PROJECT_TITLE'};
    const expectedActions = [{type: project.ADD_PROJECT, project: prjData}];
    const store = mockStore();
    store.dispatch(project.addProject(prjData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create UPDATE_PROJECT action', () => {
    const prjData = {title: 'TEST_PROJECT_TITLE'};
    const expectedActions = [{type: project.UPDATE_PROJECT, project: prjData}];
    const store = mockStore();
    store.dispatch(project.updateProject(prjData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_PROJECTS_ARRAY action', () => {
    const prjData = {title: 'TEST_PROJECT_TITLE'};
    const expectedActions = [
      {type: project.FILL_PROJECTS_ARRAY, projects: [prjData]},
    ];
    const store = mockStore();
    store.dispatch(project.fillProjectsArray([prjData]));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create REMOVE_PROJECT action', () => {
    const id = 1;
    const expectedActions = [{type: project.REMOVE_PROJECT, id}];
    const store = mockStore();
    store.dispatch(project.removeProject(id));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create FILL_PROJECTS_ARRAY action (async getAll)', () => {
    const projectData = {title: 'TEST_PROJECT_TITLE'};
    mock.onGet('/project', {
      params: {
        order: Filter.DESC,
      },
    }).reply(HttpStatus.OK, [projectData]);
    const store = mockStore();
    const expectedActions = [
      {type: project.TOGGLE_PROJECT_FETCH},
      {type: project.FILL_PROJECTS_ARRAY, projects: [projectData]},
      {type: project.TOGGLE_PROJECT_FETCH},
    ];
    return store.dispatch(project.getAll()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create ADD_PROJECT action (async create)', () => {
    const newProject = {title: 'TEST_PROJECT_TITLE'};
    const projectResult = {id: 1, ...newProject};
    mock.onPost('/project').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(newProject));
      return [HttpStatus.CREATED, projectResult];
    });
    const store = mockStore();
    const expectedActions = [
      {type: project.TOGGLE_PROJECT_FETCH},
      {type: project.ADD_PROJECT, project: projectResult},
      {type: project.TOGGLE_PROJECT_FETCH},
    ];
    return store.dispatch(project.create(newProject)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create UPDATE_PROJECT action (async update)', () => {
    const updatedProject = {title: 'TEST_PROJECT_TITLE'};
    mock.onPut('/project').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(updatedProject));
      return [HttpStatus.NO_CONTENT];
    });
    const store = mockStore();
    const expectedActions = [
      {type: project.TOGGLE_PROJECT_FETCH},
      {type: project.UPDATE_PROJECT, project: updatedProject},
      {type: project.TOGGLE_PROJECT_FETCH},
    ];
    return store.dispatch(project.update(updatedProject)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('Should create REMOVE_PROJECT action (async remove)', () => {
    const id = 1;
    mock.onDelete('/project').reply((config) => {
      const {headers, params} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(params.id).toBe(id);
      return [HttpStatus.NO_CONTENT];
    });
    const store = mockStore();
    const expectedActions = [
      {type: project.TOGGLE_PROJECT_FETCH},
      {type: project.REMOVE_PROJECT, id},
      {type: project.TOGGLE_PROJECT_FETCH},
    ];
    return store.dispatch(project.remove(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
