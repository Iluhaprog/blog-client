import api from '../api';
import userapi from '../UserApi';
import MockAdapter from 'axios-mock-adapter';
import { base64Encode } from '../../util/base64';
import { user } from './MockData';

describe('Test user api', () => {
    const mock = new MockAdapter(api);

    test('POST /login', () => {
        const username = 'username', password = 'password'
        const token = base64Encode(`${username}:${password}`);
        mock.onPost('/user/login', {}, expect.objectContaining({
            Authorization: `Bearer ${token}`,
        })).reply(200, user);

        return userapi.login(username, password).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(user);
        });
    });
    
    test('POST /logout', () => {
        mock.onPost('/user/logout').reply(204);
        return userapi.logout().then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    });
    
    test('GET /getById', () => {
        mock.onGet('/user/getById', {
            params: {
                id: 1,
            },
        }).reply(200, user);
        return userapi.getById(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(user);
        });
    });
    
    test('GET /getAll', () => {
        mock.onGet('/user/getAll').reply(200, [user]);
        return userapi.getAll().then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual([user]);
        });
    });
    
    test('GET /getByEmail', () => {
        mock.onGet('/user/getByEmail', {
            params: {
                email: user.email,
            },
        }).reply(200, user);
        return userapi.getByEmail(user.email).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(user);
        });
    });
    
    test('GET /getByUsername', () => {
        mock.onGet('/user/getByUsername', {
            params: {
                username: user.username,
            },
        }).reply(200, user);
        return userapi.getByUsername(user.username).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(user);
        });
    });
    
    test('GET /verify/:code', () => {
        mock.onGet('/user/verify/123456', {}).reply(200);
        return userapi.verify('123456').then(responce => {
            const { status } = responce;
            expect(status).toBe(200);
        });
    });
    
    test('POST /create', () => {
        mock.onPost('/user/create', { user }).reply(200, user);
        return userapi.create(user).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(user);
        });
    });
    
    test('PUT /update', () => {
        const updatedUser = {...user, username: 'NewUsername'};
        mock.onPut('/user/update', { user: updatedUser }).reply(200, updatedUser);
        return userapi.update(updatedUser).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(updatedUser);
        });
    });
    
    test('DELETE /remove', () => {
        mock.onDelete('/user/remove').reply(204);
        return userapi.remove().then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    });
    
    test('DELETE /deleteById', () => {
        mock.onDelete('/user/deleteById', {
            params: {
                id: 1,
            },
        }).reply(204);
        return userapi.deleteById(1).then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    });
});