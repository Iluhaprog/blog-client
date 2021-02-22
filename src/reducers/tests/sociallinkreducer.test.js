import SocialLinkReducer from '../SocialLinkReducer';

import { 
    setSocialFetch,
    createSocialLink,
    setSocialLinks,
    setFooterSocialLinks,
    updateSocialLink,
    deleteSocialLink,
} from '../../actoins/socialLink';

const initSocialLinkState = {
    socialLinks: [],
    footerLinks: [],
    isFetch: false,
};

describe('Test SocialLinkReducer', () => {
    test('Should return init state', () => {
        expect(SocialLinkReducer(undefined, {})).toEqual(initSocialLinkState);
    });

    test('Should handle SET_SOCIAL_FETCH action', () => {
        expect(SocialLinkReducer(initSocialLinkState, setSocialFetch(true))).toEqual({
            ...initSocialLinkState,
            isFetch: true,
        });
    });

    test('Should handle CREATE_SOCIAL_LINK', () => {
        const socialLink = {};
        expect(SocialLinkReducer(initSocialLinkState, createSocialLink(socialLink))).toEqual({
            ...initSocialLinkState,
            socialLinks: [{}],
        });
    });

    test('Should handle SET_SOCIAL_LINKS', () => {
        const socialLinks = [{}]
        expect(SocialLinkReducer(initSocialLinkState, setSocialLinks(socialLinks))).toEqual({
            ...initSocialLinkState,
            socialLinks: [{}],
        });
    });

    test('Should handle SET_FOOTER_SOCIAL_LINKS', () => {
        const socialLinks = [{}]
        expect(SocialLinkReducer(initSocialLinkState, setFooterSocialLinks(socialLinks))).toEqual({
            ...initSocialLinkState,
            footerLinks: [{}],
        });
    });

    test('Should handle UPDATE_SOCIAL_LINK', () => {
        const updatedLink = { id: 1, title: 'updated title' };
        const initialState = {
            ...initSocialLinkState,
            socialLinks: [
                {id: 1, title: 'title'},
            ],
        };
        const expectedState = {
            ...initSocialLinkState,
            socialLinks: [ updatedLink ],
        };
        expect(SocialLinkReducer(initialState, updateSocialLink(updatedLink))).toEqual(expectedState);
    });

    test('Should handle DELETE_SOCIAL_LINK', () => {
        const initialState = {
            ...initSocialLinkState,
            socialLinks: [
                {id: 1},
            ],
        };
        const expectedState = {
            ...initSocialLinkState,
            socialLinks: [],
        };
        expect(SocialLinkReducer(initialState, deleteSocialLink(1))).toEqual(expectedState);
    });
});