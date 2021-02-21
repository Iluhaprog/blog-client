import socialapi from '../api/SocialLinkApi';

export const SELECT_SOCIAL = 'SELECT_SOCIAL';
export const SET_SOCIAL_LINKS = 'SET_SOCIAL_LINKS';
export const SET_MAIN_SOCIAL_LINKS = 'SET_MAIN_SOCIAL_LINKS';
export const UPDATE_SOCIAL_LINK = 'UPDATE_SOCIAL_LINK';
export const DELETE_SOCIAL_LINK = 'DELETE_SOCIAL_LINK';

export const selectSocial = id => ({
    type: SELECT_SOCIAL,
    id
});

export const setSocialLinks = socialLinks => ({
    type: SET_SOCIAL_LINKS,
    socialLinks,
});

export const setMainSocials = socialLinks => ({
    type: SET_MAIN_SOCIAL_LINKS,
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

export const baseAction = { type: '' };

export const getSocialsByUserId = (userId, loading = () => baseAction) => dispatch => {
    dispatch(loading(true));
    return socialapi.getByUserId(userId).then(response => {
        const { status ,data } = response;
        if (status == 200) {
            dispatch(setSocialLinks(data));
            dispatch(loading(false));
        }
    });
};

export const getMainSocials = (loading = () => baseAction) => dispatch => {
    dispatch(loading(true)); 
    const userId = process.env.REACT_APP_ADMIN_ID;
    return socialapi.getByUserId(userId).then(response => {
        const { status ,data } = response;
        if (status == 200) {
            dispatch(setMainSocials(data));
            dispatch(loading(false));
        }
    });
};

export const updateSocial = (socialLink, loading = () => baseAction) => dispatch => {
    dispatch(loading(true));
    return socialapi.update(socialLink).then(responce => {
        const { status ,data } = responce;
        if (status == 200) {
            dispatch(updateSocialLink(data));
            dispatch(loading(false));
        }
    });
};

export const deleteSocialLinkById = (id, loading = () => baseAction) => dispatch => {
    dispatch(loading(true));
    return socialapi.deleteById(id).then(responce => {
        const { status } = responce;
        if (status === 204) {
            dispatch(deleteSocialLink(id));
            dispatch(loading(false));
        }
    });
};

export const updateSocialPreview = (socialLinkId, formData, loading = () => baseAction) => {
    return dispatch => {
        dispatch(loading(true));
        return socialapi.updatePreview(socialLinkId, formData).then(responce => {
            const { status, data } = responce;
            if(status === 200) {
                dispatch(updateSocialLink(data));
                dispatch(loading(false));
            }
        });
    }; 
};
