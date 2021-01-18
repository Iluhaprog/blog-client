import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import { role } from './MockData';
import roleapi from '../RoleApi';

describe('Test role api', () => {
    const mock = new MockAdapter(api);

    test('POST /create', () => {
        mock.onPost('/role/create', {
            role,
        }).reply(200, role);
        return roleapi.create(role).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(role);
        });
    });

    test('GET /getById', () => {
        mock.onGet('/role/getById', {
            params: { 
                id: 1 
            },
        }).reply(200, role);
        return roleapi.getById(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(role);
        });
    });

    test('DELETE /deleteById', () => {
        mock.onDelete('/role/deleteById', {
            params: {
                id: 1,
            },
        }).reply(204);
        return roleapi.deleteById(1).then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    })
});