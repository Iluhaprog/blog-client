import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import { comment } from './MockData';
import commentapi from '../CommentApi';

describe('Test comment api', () => {
    const mock = new MockAdapter(api);

    test('GET /getById', () => {
        mock.onGet('/comment/getById', {
            params: {
                id: 1,
            },
        }).reply(200, comment);
        return commentapi.getById(1).then(response => {
            const { status, data } = response;
            expect(status).toBe(200);
            expect(data).toEqual(comment);
        });
    });

    test('GET /getByPostId', () => {
        mock.onGet('/comment/getByPostId', {
            params: {
                postId: 1,
            },
        }).reply(200, [comment]);
        return commentapi.getByPostId(1).then(response => {
            const { status, data } = response;
            expect(status).toBe(200);
            expect(data).toEqual([comment]);
        });
    })

    test('POST /create', () => {
        mock.onPost('/comment/create', { comment }).reply(200, comment);
        return commentapi.create(comment).then(responce => { 
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(comment);
        });
    });

    test('PUT /update', () => {
        const updatedCommnet = {...comment, text: 'new text'};
        mock.onPut('/comment/update', { 
            comment: updatedCommnet
        }).reply(200, updatedCommnet);
        return commentapi.update(updatedCommnet).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(updatedCommnet);
        });
    })

    test('DELETE /deleteById', () => {
        mock.onDelete('/comment/deleteById', {
            params: {
                id: 1,
            },
        }).reply(204);
        return commentapi.deleteById(1).then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    });
});