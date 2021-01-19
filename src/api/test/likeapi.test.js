import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import { like } from './MockData';
import likeapi from '../LikeApi';

describe('Test post api', () => {
    const mock = new MockAdapter(api);

    test('GET /getById', () => {
        mock.onGet('/like/getById', { 
            params: { 
                id: 1 
            },
        }).reply(200, like);
        return likeapi.getById(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(like);
        });
    });

    test('GET /getByUserId', () => {
        mock.onGet('/like/getByUserId', { 
            params: { 
                userId: 1 
            },
        }).reply(200, [like]);
        return likeapi.getByUserId(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual([like]);
        });
    });

    test('GET /getByPostId', () => {
        mock.onGet('/like/getByPostId', { 
            params: { 
                postId: 1 
            },
        }).reply(200, [like]);
        return likeapi.getByPostId(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual([like]);
        });
    });

    test('GET /getAll', () => {
        mock.onGet('/like/getAll').reply(200, [like]);
        return likeapi.getAll().then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual([like]);
        });
    });

    test('POST /create', () => {
        mock.onPost('/like/create', { like }).reply(200, like);
        return likeapi.create(like).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(like);
        });
    });

    test('DELETE /deleteById', () => {
        mock.onDelete('/like/deleteById', {
            params: {
                id: 1,
            },
        }).reply(204);
        return likeapi.deleteById(1).then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    });
});