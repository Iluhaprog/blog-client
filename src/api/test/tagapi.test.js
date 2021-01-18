import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import { tag } from './MockData';
import tagapi from '../TagApi';

describe('Test tag api', () => {
    const mock = new MockAdapter(api);

    test('POST /create', () => {
        mock.onPost('/tag/create', {
            tag,
        }).reply(200, tag);
        return tagapi.create(tag).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(tag);
        });
    });

    test('GET /getById', () => {
        mock.onGet('/tag/getById', {
            params: { 
                id: 1 
            },
        }).reply(200, tag);
        return tagapi.getById(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(tag);
        });
    });

    test('GET /getByPostId', () => {
        mock.onGet('/tag/getByPostId', {
            params: { 
                postId: 1 
            },
        }).reply(200, [tag]);
        return tagapi.getByPostId(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual([tag]);
        });
    });

    test('DELETE /deleteById', () => {
        mock.onDelete('/tag/deleteById', {
            params: {
                id: 1,
            },
        }).reply(204);
        return tagapi.deleteById(1).then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    })
});