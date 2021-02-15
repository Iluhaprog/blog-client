import MockAdapter from 'axios-mock-adapter';
import api from '../api';
import userapi from '../UserApi';
import { base64Encode } from '../../util/base64';
import { user, formData, file } from './MockData';
import {
    LOGIN,
    LOGOUT,
    GET_USER_BY_ID,
    GET_ALL_USERS,
    GET_USER_BY_EMAIL,
    GET_USER_BY_USERNAME,
    CREATE_USER,
    VERIFY,
    UPDATE_USER,
    UPDATE_AVATAR,
    REMOVE_USER,
    DELETE_USER_BY_ID,
} from '../UserApi';

describe('Test user api', () => {
    const mock = new MockAdapter(api);

    test('POST /login', () => {
        const username = 'username', password = 'password'
        const token = base64Encode(`${username}:${password}`);
        mock.onPost(LOGIN, {}, expect.objectContaining({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        })).reply(200, user);

        return userapi.login(username, password).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(user);
        });
    });
    
    test('POST /logout', () => {
        mock.onPost(LOGOUT).reply(204);
        return userapi.logout().then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    });
    
    test('GET /getById', () => {
        mock.onGet(GET_USER_BY_ID, {
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
        mock.onGet(GET_ALL_USERS).reply(200, [user]);
        return userapi.getAll().then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual([user]);
        });
    });
    
    test('GET /getByEmail', () => {
        mock.onGet(GET_USER_BY_EMAIL, {
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
        mock.onGet(GET_USER_BY_USERNAME, {
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
        mock.onGet(VERIFY + '/123456', {}).reply(200);
        return userapi.verify('123456').then(responce => {
            const { status } = responce;
            expect(status).toBe(200);
        });
    });
    
    test('POST /create', () => {
        mock.onPost(CREATE_USER, { user }).reply(200, user);
        return userapi.create(user).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(user);
        });
    });
    
    test('PUT /update', () => {
        const updatedUser = {...user, username: 'NewUsername'};
        mock.onPut(UPDATE_USER, { user: updatedUser }).reply(200, updatedUser);
        return userapi.update(updatedUser).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(updatedUser);
        });
    });

    test('PUT /updateAvatar', () => {
        mock.onPut(UPDATE_AVATAR).reply(config => {
            const { headers, data, params } = config;
            expect(params.dirname).toBe('avatars');
            expect(headers['Content-Type']).toBe('multipart/form-data');
            expect(data).toEqual(formData);
            return new Promise((resolve, reject) => {
                resolve([200, file]);
            });
        });
        return userapi.updateAvatar('avatars', formData).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(file);
        });
    });
    
    test('DELETE /remove', () => {
        mock.onDelete(REMOVE_USER).reply(204);
        return userapi.remove().then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    });
    
    test('DELETE /deleteById', () => {
        mock.onDelete(DELETE_USER_BY_ID, {
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