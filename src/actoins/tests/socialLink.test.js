import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import api from '../../api/api';
import {
    GET_BY_USER_ID,
    UPDATE_SOCIAL_LINK,
    UPDATE_SOCIAL_LINK_PREVIEW,
    DELETE_SOCIAL_LINK,
} from '../../api/SocialLinkApi';
import {
    selectSocial,
    setSocialLinks,
    setMainSocials,
    updateSocialLink,
    deleteSocialLink,
    getSocialsByUserId,
    getMainSocials,
    updateSocial,
    updateSocialPreview,
    deleteSocialLinkById,
    baseAction,
} from '../socialLink';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test sync action creators', () => {
    test('Should create SELECT_SOCIAL action', () => {
        const store = mockStore();
        const expectedActions = [{ type: 'SELECT_SOCIAL', id: 1 }];
        store.dispatch(selectSocial(1));
        expect(store.getActions()).toEqual(expectedActions);
    });
    
    test('Should create SET_SOCIAL_LINKS action', () => {
        const store = mockStore();
        const socialLink = {title: 't', preview: '', link: ''}
        const expectedActions = [
            { type: 'SET_SOCIAL_LINKS', socialLinks: [socialLink] }
        ];
        store.dispatch(setSocialLinks([socialLink]));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create SET_MAIN_SOCIAL_LINKS action', () => {
        const store = mockStore();
        const socialLink = {title: 't', preview: '', link: ''}
        const expectedActions = [
            { type: 'SET_MAIN_SOCIAL_LINKS', socialLinks: [socialLink] }
        ];
        store.dispatch(setMainSocials([socialLink]));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create UPDATE_SOCIAL_LINK action', () => {
        const store = mockStore();
        const socialLink = {title: 't', preview: '', link: ''}
        const expectedActions = [
            { type: 'UPDATE_SOCIAL_LINK', socialLink }
        ];
        store.dispatch(updateSocialLink(socialLink));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create DELETE_SOCIAL_LINK action', () => {
        const store = mockStore();
        const expectedActions = [
            { type: 'DELETE_SOCIAL_LINK', id: 1 }
        ];
        store.dispatch(deleteSocialLink(1));
        expect(store.getActions()).toEqual(expectedActions);
    });
});


describe('Test async action creators', () => {
    const mock = new MockAdapter(api);

    test('Should create SET_SOCIAL_LINKS action', () => {
        const social = {title: 't', preview: '', link: ''}
        mock.onGet(GET_BY_USER_ID, {
            params: { userId: 1 },
        }).reply(200, [social]);
        const expectedActions = [
            baseAction,
            { type: 'SET_SOCIAL_LINKS', socialLinks: [social] },
            baseAction,
        ];
        const store = mockStore();
        return store.dispatch(getSocialsByUserId(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    test('Should create SET_MAIN_SOCIAL_LINKS action', () => {
        const social = {title: 't', preview: '', link: ''}
        mock.onGet(GET_BY_USER_ID, {
            params: { userId: process.env.REACT_APP_ADMIN_ID },
        }).reply(200, [social]);
        const expectedActions = [
            baseAction,
            { type: 'SET_MAIN_SOCIAL_LINKS', socialLinks: [social] },
            baseAction,
        ];
        const store = mockStore();
        return store.dispatch(getMainSocials()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    test('Should create UPDATE_SOCIAL_LINK action', () => {
        const social = {title: 't', preview: '', link: ''}
        mock.onPut(UPDATE_SOCIAL_LINK, { socialLink: social }).reply(200, social);
        const expectedActions = [
            baseAction,
            { type: 'UPDATE_SOCIAL_LINK', socialLink: social },
            baseAction,
        ];
        const store = mockStore();
        return store.dispatch(updateSocial(social)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    test('Should create UPDATE_SOCIAL_LINK action(update preview)', () => {
        const social = {title: 't', preview: '', link: ''}
        const formData = new FormData();
        mock.onPut(UPDATE_SOCIAL_LINK_PREVIEW, formData).reply(200, social);
        const expectedActions = [
            baseAction,
            { type: 'UPDATE_SOCIAL_LINK', socialLink: social },
            baseAction,
        ];
        const store = mockStore();
        return store.dispatch(updateSocialPreview(1, formData)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    test('Should create DELETE_SOCIAL_LINK action', () => {
        mock.onDelete(DELETE_SOCIAL_LINK, { 
            params: { id: 1 }
        }).reply(204);
        const expectedActions = [
            baseAction,
            { type: 'DELETE_SOCIAL_LINK', id: 1 },
            baseAction,
        ];
        const store = mockStore();
        return store.dispatch(deleteSocialLinkById(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
});