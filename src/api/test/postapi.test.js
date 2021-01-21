import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import { post } from './MockData';
import postapi from '../PostApi';

describe('Test post api', () => {
    const mock = new MockAdapter(api);

    test('GET /getById', () => {
        mock.onGet('/post/getById', {
            params: {
                id: 1,
            },
        }).reply(200, post);
        return postapi.getById(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(post);
        });
    });
    
    test('GET /getCount', () => {
        mock.onGet('/post/getCount').reply(200, { count: 1 });
        return postapi.getCount().then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual({ count: 1 });
        });
    });

    test('GET /getAll', () => {
        mock.onGet('/post/getAll/0/1').reply(200, [post]);
        return postapi.getAll(0, 1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual([post]);
        });
    });
    
    test('GET /getByUserId', () => {
        mock.onGet('/post/getByUserId', {
            params: {
                userId: post.userId,
            },
        }).reply(200, post);
        return postapi.getByUserId(post.userId).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(post);
        });
    });
    
    test('POST /create', () => {
        mock.onPost('/post/create', { post }).reply(200, post);
        return postapi.create(post).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(post);
        });
    });
    
    test('PUT /update', () => {
        const updatedPost = {...post, title: 'New Title'};
        mock.onPut('/post/update', { post: updatedPost }).reply(200, updatedPost);
        return postapi.update(updatedPost).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(updatedPost);
        });
    });

    test('DELETE /deleteById', () => {
        mock.onDelete('/post/deleteById', {
            params: {
                id: 1,
            },
        }).reply(204);
        return postapi.deleteById(1).then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    });

});