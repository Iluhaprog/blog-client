import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import { comment } from './MockData';
import commentapi from '../CommentApi';
import {
    CREATE_COMMENT,
    GET_COMMENT_BY_ID,
    GET_ALL_COMMENTS,
    GET_COMMENTS_BY_POST_ID,
    GET_COMMENT_BY_USER_ID,
    UPDATE_COMMENT,
    DELETE_COMMENT_BY_ID,
} from '../CommentApi';

describe('Test comment api', () => {
    const mock = new MockAdapter(api);

    test('GET /getById', () => {
        mock.onGet(GET_COMMENT_BY_ID, {
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
        mock.onGet(GET_COMMENTS_BY_POST_ID + '/0/1', {
            params: {
                postId: 1,
            },
        }).reply(200, [comment]);
        return commentapi.getByPostId(1, 0, 1).then(response => {
            const { status, data } = response;
            expect(status).toBe(200);
            expect(data).toEqual([comment]);
        });
    });

    test('GET /getByUserId', () => {
        mock.onGet(GET_COMMENT_BY_USER_ID + '/0/1', {
            params: {
                userId: 1,
            },
        }).reply(200, [comment]);
        return commentapi.getByPostId(1, 0, 1).then(response => {
            const { status, data } = response;
            expect(status).toBe(200);
            expect(data).toEqual([comment]);
        });
    });

    test('POST /create', () => {
        mock.onPost(CREATE_COMMENT, { comment }).reply(200, comment);
        return commentapi.create(comment).then(responce => { 
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(comment);
        });
    });

    test('PUT /update', () => {
        const updatedCommnet = {...comment, text: 'new text'};
        mock.onPut(UPDATE_COMMENT, { 
            comment: updatedCommnet
        }).reply(200, updatedCommnet);
        return commentapi.update(updatedCommnet).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(updatedCommnet);
        });
    })

    test('DELETE /deleteById', () => {
        mock.onDelete(DELETE_COMMENT_BY_ID, {
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