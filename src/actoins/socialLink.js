import SocialLinkApi from '../api/SocialLinkApi';

export const CREATE_SOCIAL_LINK = 'CREATE_SOCIAL_LINK';
export const SET_SOCIAL_LINKS = 'SET_SOCIAL_LINKS';
export const SET_FOOTER_SOCIAL_LINKS = 'SET_FOOTER_SOCIAL_LINKS';
export const UPDATE_SOCIAL_LINK = 'UPDATE_SOCIAL_LINK';
export const DELETE_SOCIAL_LINK = 'DELETE_SOCIAL_LINK';

export const createSocialLink = socialLink => ({
    type: CREATE_SOCIAL_LINK,
    socialLink,
});

export const setSocialLinks = socialLinks => ({
    type: SET_SOCIAL_LINKS,
    socialLinks,
});

export const setFooterSocialLinks = socialLinks => ({
    type: SET_FOOTER_SOCIAL_LINKS,
    socialLinks,
});

export const updateSocialLink = socialLink => ({
    type: UPDATE_SOCIAL_LINK,
    socialLink,
});

export const deleteSocialLink = id => ({
    type: DELETE_SOCIAL_LINK,
    id,
});

export const createSocialLinkFetch = socialLink => dispatch => (
    SocialLinkApi.create(socialLink).then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(createSocialLink(data));
        }
    })
);

export const setSocialLinksFetch = userId => dispatch => (
    SocialLinkApi.getByUserId(userId).then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(setSocialLinks(data));
        }
    })
);

export const setFooterSocialLinksFetch = () => dispatch => (
    SocialLinkApi.getByUserId(process.env.REACT_APP_ADMIN_ID).then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(setFooterSocialLinks(data));
        }
    })
);

export const updateSocialLinkFetch = socialLink => dispatch => (
    SocialLinkApi.update(socialLink).then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(updateSocialLink(data));
        }
    })
);

export const updateSocialLinkPreviewFetch = (socialLinkId, formData) => dispatch => (
    SocialLinkApi.updatePreview(socialLinkId, formData).then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(updateSocialLink(data));
        }
    })
);

export const deleteSocialLinkFetch = id => dispatch => (
    SocialLinkApi.deleteById(id).then(response => {
        const { status } = response;
        if (status === 204) {
            dispatch(deleteSocialLink(id));
        }
    })
);