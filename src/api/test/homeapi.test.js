import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import { file, formData } from './MockData';
import homeapi from '../HomeApi';
import {
    GET_HOME,
    UPDATE_HOME,
    UPDATE_HOME_PREVIEW
} from '../HomeApi';

const home = {
    id: 1,
    title: 'Test',
    preview: '',
};

describe('Test home api', () => {
    const mock = new MockAdapter(api);

    test('GET /get', () => {
        mock.onGet(GET_HOME).reply(200, {...home});
        return homeapi.get().then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(home);
        });
    });

    test('PUT /update', () => {
        const updatedHome = {...home, title: 'updated'}
        mock.onPut(UPDATE_HOME, { home }).reply(200, updatedHome);
        return homeapi.update(home).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(updatedHome);
        });
    });

    test('PUT /updatePreview', () => {
        mock.onPut(UPDATE_HOME_PREVIEW).reply(config => {
            const { headers, data, params } = config;
            expect(params.dirname).toBe(process.env.REACT_APP_HOME_DIR);
            expect(headers['Content-Type']).toBe('multipart/form-data');
            expect(data).toEqual(formData);
            return new Promise((resolve, reject) => {
                resolve([200, file]);
            });
        });
        return homeapi.updatePreview(formData).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(file);
        });
    });
});