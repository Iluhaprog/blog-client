import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import api from '../../api/api';

import { selectProjectById, clearSelectedProject, setProjectsTotal, setProjectsTotalFetch } from '../project';
import { addProjects, addProject, clearProjects } from '../project';
import { updateProject, deleteProjectById } from '../project';
import { createFetch, updateFetch, deleteFetch, getAllFetch } from '../project';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initProjectState = {
    selected: {
        title: '',
        description: '',
        preview: '',
        projectLink: '',
        githubLink: '',
    },
    array: [],
    total: 0,
};

describe('Test sync action creators', () => {
    test('Should create SET_PROJECTS_TOTAL action', () => {
        const expectedActions = [{ type: 'SET_PROJECTS_TOTAL', total: 1}];
        const store = mockStore({ project: {} });
        store.dispatch(setProjectsTotal(1));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create SELECT_PROJECT action', () => {
        const expectedActions = [{ type: 'SELECT_PROJECT', id: 1}];
        const store = mockStore({ project: {} });
        store.dispatch(selectProjectById(1));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create CLEAR_SELECTED_PROJECT action', () => {
        const expectedActions = [{ type: 'CLEAR_SELECTED_PROJECT' }];
        const store = mockStore({ project: {} });
        store.dispatch(clearSelectedProject());
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create ADD_PROJECTS action', () => {
        const projects = [{...initProjectState, title: 'Project'}];
        const expectedActions = [{ type: 'ADD_PROJECTS', projects }];
        const store = mockStore({ project: {} });
        store.dispatch(addProjects(projects));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create ADD_PROJECT action', () => {
        const project = {...initProjectState, title: 'Project'};
        const expectedActions = [{ type: 'ADD_PROJECT', project }];
        const store = mockStore({ project: {} });
        store.dispatch(addProject(project));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create CLEAR_PROJECTS action', () => {
        const expectedActions = [{ type: 'CLEAR_PROJECTS' }];
        const store = mockStore({ project: {} });
        store.dispatch(clearProjects());
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create UPDATE_PROJECT action', () => {
        const project = {...initProjectState, title: 'Project'};
        const expectedActions = [{ type: 'UPDATE_PROJECT', project }];
        const store = mockStore({ project: {} });
        store.dispatch(updateProject(project));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create DELETE_PROJECT_FROM_ARRAY action', () => {
        const expectedActions = [{ type: 'DELETE_PROJECT_FROM_ARRAY', id: 1 }];
        const store = mockStore({ project: {} });
        store.dispatch(deleteProjectById(1));
        expect(store.getActions()).toEqual(expectedActions);
    });
});

describe('Test async action creators', () => {
    const mock = new MockAdapter(api);

    test('Should create ADD_PROJECT action', () => {
        const project = {...initProjectState, title: 'New project'};
        mock.onPost('/project/create', { project }).reply(200, project);
        const expectedActions = [{ type: 'ADD_PROJECT', project }]
        const store = mockStore({ project: {}});

        return store.dispatch(createFetch(project)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create SET_PROJECTS_TOTAL action', () => {
        const expectedActions = [{ type: 'SET_PROJECTS_TOTAL', total: 0 }];
        const result = { count: 0 };
        mock.onGet('/project/getCount').reply(200, result);
        const store = mockStore({ project: {} });
        return store.dispatch(setProjectsTotalFetch()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create UPDATE_PROJECT action', () => {
        const project = {...initProjectState, title: 'Updated project'};
        mock.onPut('/project/update', { project }).reply(200, project);
        const expectedActions = [{ type: 'UPDATE_PROJECT', project }]
        const store = mockStore({ project: {}});

        return store.dispatch(updateFetch(project)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create DELETE_PROJECT_FROM_ARRAY action', () => {
        mock.onDelete('/project/deleteById', { 
            params: { id: 1 }  
        }).reply(204);
        const expectedActions = [{ type: 'DELETE_PROJECT_FROM_ARRAY', id: 1 }]
        const store = mockStore({ project: {}});

        return store.dispatch(deleteFetch(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create ADD_PROJECTS action', () => {
        const project = {...initProjectState, title: 'New project'};
        mock.onGet('/project/getAll/0/1').reply(200, [project]);
        const expectedActions = [{ type: 'ADD_PROJECTS', projects: [project] }]
        const store = mockStore({ project: {}});

        return store.dispatch(getAllFetch(0, 1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});