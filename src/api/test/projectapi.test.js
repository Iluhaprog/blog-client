import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import { project, file, formData } from './MockData';
import projectapi from '../ProjectApi';
import {
    GET_PROJECT_BY_ID,
    GET_PROJECT_BY_USER_ID,
    GET_ALL_PROJECTS,
    GET_PROJECTS_COUNT,
    UPDATE_PROJECT,
    UPDATE_PROJECT_PREVIEW,
    DELETE_PROJECT_BY_ID,
    CREATE_PROJECT,
} from '../ProjectApi'

describe('Test project api', () => {
    const mock = new MockAdapter(api);

    test('GET /getById', () => {
        mock.onGet(GET_PROJECT_BY_ID, {
            params: {
                id: 1,
            },
        }).reply(200, project);
        return projectapi.getById(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(project);
        });
    });
    
    test('GET /getAll', () => {
        mock.onGet(GET_ALL_PROJECTS + '/0/1').reply(200, [project]);
        return projectapi.getAll(0, 1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual([project]);
        });
    });
    
    test('GET /getByUserId', () => {
        mock.onGet(GET_PROJECT_BY_USER_ID, {
            params: {
                userId: project.userId,
            },
        }).reply(200, project);
        return projectapi.getByUserId(project.userId).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(project);
        });
    });

    test('PUT /updatePreview', () => {
        mock.onPut(UPDATE_PROJECT_PREVIEW).reply(config => {
            const { headers, data, params } = config;
            expect(params.projectId).toBe(1);
            expect(params.dirname).toBe(process.env.REACT_APP_PREVIEWS_DIR);
            expect(headers['Content-Type']).toBe('multipart/form-data');
            expect(data).toEqual(formData);
            return new Promise((resolve, reject) => {
                resolve([200, file]);
            });
        });
        return projectapi.updatePreview(1, formData).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(file);
        });
    })


    test('GET /getCount', () => {
        const result = { count: 0 };
        mock.onGet(GET_PROJECTS_COUNT).reply(200, result);
        return projectapi.getTotal().then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(result);
        });
    });
    
    test('POST /create', () => {
        mock.onPost(CREATE_PROJECT, { project }).reply(200, project);
        return projectapi.create(project).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(project);
        });
    });
    
    test('PUT /update', () => {
        const updatedProject = {...project, title: 'New Title'};
        mock.onPut(UPDATE_PROJECT, { project: updatedProject }).reply(200, updatedProject);
        return projectapi.update(updatedProject).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(updatedProject);
        });
    });
    
    test('DELETE /deleteById', () => {
        mock.onDelete(DELETE_PROJECT_BY_ID, {
            params: {
                id: 1,
            },
        }).reply(204);
        return projectapi.deleteById(1).then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    });
});