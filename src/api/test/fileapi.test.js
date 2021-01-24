import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import { file, formData } from './MockData';
import fileapi from '../FileApi';

describe('Test file api', () => {
    const mock = new MockAdapter(api);

    test('GET /getById', () => {
        mock.onGet('/file/getById', {
            params: {
                id: 1,
            },
        }).reply(200, file);
        return fileapi.getById(1).then(response => {
            const { status, data } = response;
            expect(status).toBe(200);
            expect(data).toEqual(file);
        });
    });

    test('POST /create', () => {
        mock.onPost('/file/create').reply(config => {
            const { headers, data, params } = config;
            expect(params.dirname).toBe('uploads');
            expect(headers['Content-Type']).toBe('multipart/form-data');
            expect(data).toEqual(formData);
            return new Promise((resolve, reject) => {
                resolve([200, file]);
            });
        });
        return fileapi.create('uploads', formData).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(file);
        });
    });

    test('PUT /update', () => {
        const updatedFile = {...file, name: 'newFileName.jpg'};
        mock.onPut('/file/update', { 
            file: updatedFile
        }).reply(200, updatedFile);
        return fileapi.update(updatedFile).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(updatedFile);
        });
    });

    test('GET /getByDirectoryId', () => {
        const fileData = {...file};
        mock.onGet('/file/getByDirectoryId', { 
            params: { directoryId: 1 }
        }).reply(200, [fileData]);
        return fileapi.getByDirectoryId(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual([fileData]);
        });
    });

    test('DELETE /deleteById', () => {
        mock.onDelete('/file/deleteById', {
            params: {
                id: 1,
            },
        }).reply(204);
        return fileapi.deleteById(1).then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    });

});