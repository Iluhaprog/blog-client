import api from '../api';
import MockAdapter from 'axios-mock-adapter';
import { social, formData, file } from './MockData';
import { 
    GET_BY_ID,
    GET_BY_USER_ID,
    CREATE_SOCIAL_LINK,
    UPDATE_SOCIAL_LINK,
    UPDATE_SOCIAL_LINK_PREVIEW,
    DELETE_SOCIAL_LINK,
} from '../SocialLinkApi';
import socialapi from '../SocialLinkApi';

describe('Test social link api', () => {
    const mock = new MockAdapter(api);

    test('GET /getById', () => {
        mock.onGet(GET_BY_ID, {
            params: { id: 1 }
        }).reply(200, social);
        return socialapi.getById(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(social);
        });
    });

    test('GET /getByUserId', () => {
        mock.onGet(GET_BY_USER_ID, {
            params: { userId: 1 },
        }).reply(200, social);
        return socialapi.getByUserId(1).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(social);
        });
    });

    test('POST /create', () => {
        const newSocial = { id: 1, userId: 1, ...social};
        mock.onPost(CREATE_SOCIAL_LINK, { socialLink: social }).reply(200, newSocial);
        return socialapi.create(social).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(newSocial);
        });
    });

    test('PUT /update', () => {
        const updated = {...social, title: 'updated'};
        mock.onPut(UPDATE_SOCIAL_LINK, { socialLink: social }).reply(200, updated);
        return socialapi.update(social).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(updated);
        });
    });

    test('PUT /updatePreview', () => {
        mock.onPut(UPDATE_SOCIAL_LINK_PREVIEW).reply(config => {
            const { headers, data, params } = config;
            expect(params.socialLinkId).toBe(1);
            expect(params.dirname).toBe(process.env.REACT_APP_PREVIEWS_DIR);
            expect(headers['Content-Type']).toBe('multipart/form-data');
            expect(data).toEqual(formData);
            return new Promise((resolve, reject) => {
                resolve([200, file]);
            });
        });
        return socialapi.updatePreview(1, formData).then(responce => {
            const { status, data } = responce;
            expect(status).toBe(200);
            expect(data).toEqual(file);
        });
    });

    test('DELETE /deleteById', () => {
        mock.onDelete(DELETE_SOCIAL_LINK, {
            params: {
                id: 1,
            },
        }).reply(204);
        return socialapi.deleteById(1).then(responce => {
            const { status } = responce;
            expect(status).toBe(204);
        });
    });

});