import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import directoryapi from '../DirectoryApi';

describe('Test for directory api', () => {
    const mock = new MockAdapter(api);

    test('GET /getById', () => {
        const dir = { id: 1, name: 'dirname' };
        mock.onGet('/directory/getById', {
            params: {
                id: 1,
            },
        }).reply(200, dir);
        return directoryapi.getById(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(dir);
        });
    })
})