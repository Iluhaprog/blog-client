import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import api from '../../api/api';
import {
    CREATE_SOCIAL_LINK,
    GET_BY_USER_ID,
    UPDATE_SOCIAL_LINK,
    UPDATE_SOCIAL_LINK_PREVIEW,
    DELETE_SOCIAL_LINK,
} from '../../api/SocialLinkApi';
import {
    createSocialLink,
    setSocialLinks,
    setFooterSocialLinks,
    updateSocialLink,
    deleteSocialLink,
    createSocialLinkFetch,
    setSocialLinksFetch,
    setFooterSocialLinksFetch,
    updateSocialLinkFetch,
    updateSocialLinkPreviewFetch,
    deleteSocialLinkFetch,
} from '../socialLink';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test sync action creators', () => {
    test('Should create CREATE_SOCIAL_LINK', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'CREATE_SOCIAL_LINK', socialLink: {} }];
        store.dispatch(createSocialLink({}));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create SET_SOCIAL_LINKS action', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'SET_SOCIAL_LINKS', socialLinks: []}];
        store.dispatch(setSocialLinks([]));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create SET_FOOTER_SOCIAL_LINKS action', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'SET_FOOTER_SOCIAL_LINKS', socialLinks: []}];
        store.dispatch(setFooterSocialLinks([]));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create UPDATE_SOCIAL_LINK', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'UPDATE_SOCIAL_LINK', socialLink: {} }];
        store.dispatch(updateSocialLink({}));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create DELETE_SOCIAL_LINK action', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'DELETE_SOCIAL_LINK', id: 1 }];
        store.dispatch(deleteSocialLink(1));
        expect(store.getActions()).toEqual(expectedActions);
    });
});

describe('Test async action creators', () => {
    const mock = new MockAdapter(api);

    test('Should create CREATE_SOCIAL_LINK', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'CREATE_SOCIAL_LINK', socialLink: {} }];
        mock.onPost(CREATE_SOCIAL_LINK, { socialLink: {} }).reply(200, {});
        return store.dispatch(createSocialLinkFetch({})).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create SET_SOCIAL_LINKS action', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'SET_SOCIAL_LINKS', socialLinks: [{}]}];
        mock.onGet(GET_BY_USER_ID, {
            params: { userId: 1 }
        }).reply(200, [{}]);
        return store.dispatch(setSocialLinksFetch(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create SET_FOOTER_SOCIAL_LINKS action', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'SET_FOOTER_SOCIAL_LINKS', socialLinks: [{}]}];
        mock.onGet(GET_BY_USER_ID, {
            params: { userId: process.env.REACT_APP_ADMIN_ID }
        }).reply(200, [{}]);
        return store.dispatch(setFooterSocialLinksFetch()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create UPDATE_SOCIAL_LINK', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'UPDATE_SOCIAL_LINK', socialLink: {} }];
        mock.onPut(UPDATE_SOCIAL_LINK, { updatedSocialLink: {} }).reply(200, {});
        return store.dispatch(updateSocialLinkFetch({})).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create UPDATE_SOCIAL_LINK (preview)', () => {
        const store = mockStore();
        const fd = new FormData();
        const expectedActions = [{ type: 'UPDATE_SOCIAL_LINK', socialLink: {} }];
        mock.onPut(UPDATE_SOCIAL_LINK_PREVIEW).reply(config => {
            const { headers, data, params } = config;
            expect(params.socialLinkId).toBe(1);
            expect(params.dirname).toBe(process.env.REACT_APP_PREVIEWS_DIR);
            expect(headers['Content-Type']).toBe('multipart/form-data');
            expect(data).toEqual(fd);
            return new Promise((resolve, reject) => {
                resolve([200, {}]);
            });
        });
        return store.dispatch(updateSocialLinkPreviewFetch(1, fd)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create DELETE_SOCIAL_LINK action', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'DELETE_SOCIAL_LINK', id: 1 }];
        mock.onDelete(DELETE_SOCIAL_LINK, { 
            params: { id: 1 }
        }).reply(204);
        return store.dispatch(deleteSocialLinkFetch(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});