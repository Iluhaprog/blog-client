import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import { tag } from './MockData';
import tagapi from '../TagApi';
import TagApi from '../TagApi';
import {
    CREATE_TAG,
    GET_TAG_BY_ID,
    GET_TAGS_BY_POST_ID,
    GET_ALL_TAGS,
    DELETE_TAGS_BY_ID,
} from '../TagApi';

describe('Test tag api', () => {
    const mock = new MockAdapter(api);

    test('POST /create', () => {
        mock.onPost(CREATE_TAG, {
            tag,
        }).reply(200, tag);
        return tagapi.create(tag).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(tag);
        });
    });

    test('GET /getById', () => {
        mock.onGet(GET_TAG_BY_ID, {
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
        mock.onGet(GET_TAGS_BY_POST_ID, {
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

    test('GET /getAll', () => {
        mock.onGet(GET_ALL_TAGS).reply(200, [tag]);
        return TagApi.getAll().then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual([tag]);
        });
    });

    test('DELETE /deleteById', () => {
        mock.onDelete(DELETE_TAGS_BY_ID, {
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