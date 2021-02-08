import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import { project, file, formData } from './MockData';
import projectapi from '../ProjectApi';

describe('Test project api', () => {
    const mock = new MockAdapter(api);

    test('GET /getById', () => {
        mock.onGet('/project/getById', {
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
        mock.onGet('/project/getAll/0/1').reply(200, [project]);
        return projectapi.getAll(0, 1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual([project]);
        });
    });
    
    test('GET /getByUserId', () => {
        mock.onGet('/project/getByUserId', {
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
        mock.onPut('/project/updatePreview').reply(config => {
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
        mock.onGet('/project/getCount').reply(200, result);
        return projectapi.getTotal().then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(result);
        });
    });
    
    test('POST /create', () => {
        mock.onPost('/project/create', { project }).reply(200, project);
        return projectapi.create(project).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(project);
        });
    });
    
    test('PUT /update', () => {
        const updatedProject = {...project, title: 'New Title'};
        mock.onPut('/project/update', { project: updatedProject }).reply(200, updatedProject);
        return projectapi.update(updatedProject).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(updatedProject);
        });
    });
    
    test('DELETE /deleteById', () => {
        mock.onDelete('/project/deleteById', {
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