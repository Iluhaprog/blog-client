import * as uuid from 'uuid';
import * as project from '../projectActions';
import * as message from '../../message/messageActions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {api} from '../../../api/api';
import {Filter} from '../../../api/filters';
import {HttpStatus} from '../../../api/status';
import {MessageTypes} from '../../message/MessageTypes';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const mockStore = configureStore([thunk]);

describe('Project actions creators', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  const messageId = 'TEST_MESSAGE_ID';
  const expectedActionsMock = [
    {type: project.TOGGLE_PROJECT_FETCH},
    {
      type: message.ADD_MESSAGE,
      message: {
        id: messageId,
        type: MessageTypes.SUCCESS,
        data: {},
      },
    },
    {type: project.TOGGLE_PROJECT_FETCH},
  ];

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => messageId);
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('Should create TOGGLE_PROJECT_FETCH action', () => {
    const expectedActions = [{type: project.TOGGLE_PROJECT_FETCH}];
    const store = mockStore();
    store.dispatch(project.toggleFetch());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create SELECT_PROJECT action', () => {
    const id = 1;
    const expectedActions = [{type: project.SELECT_PROJECT, id}];
    const store = mockStore();
    store.dispatch(project.selectProject(id));
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
    const order = Filter.DESC;
    mock.onGet(`/project/${order}`)
        .reply(HttpStatus.OK, [projectData]);
    const store = mockStore();
    const expectedActions = [
      ...expectedActionsMock,
      {type: project.FILL_PROJECTS_ARRAY, projects: [projectData]},
    ];
    return store.dispatch(project.getAll()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
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
      ...expectedActionsMock,
      {type: project.ADD_PROJECT, project: projectResult},
    ];
    return store.dispatch(project.create(newProject)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
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
      ...expectedActionsMock,
      {type: project.UPDATE_PROJECT, project: updatedProject},
    ];
    return store.dispatch(project.update(updatedProject)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });

  test('Should create REMOVE_PROJECT action (async remove)', () => {
    const id = 1;
    mock.onDelete('/project/'+id).reply((config) => {
      const {headers} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      return [HttpStatus.NO_CONTENT];
    });
    const store = mockStore();
    const expectedActions = [
      ...expectedActionsMock,
      {type: project.REMOVE_PROJECT, id},
    ];
    return store.dispatch(project.remove(id)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });
  });
});
