import { 
    CREATE_SOCIAL_LINK,
    SET_SOCIAL_LINKS,
    SET_FOOTER_SOCIAL_LINKS,
    UPDATE_SOCIAL_LINK,
    DELETE_SOCIAL_LINK,
} from '../actoins/socialLink';
import { replace, deleteEl } from '../util/array'

const initSocialLinkState = {
    socialLinks: [],
    footerLinks: [],
};

const socialLinkReducer = (state = initSocialLinkState, action) => {
    switch (action.type) {
        case CREATE_SOCIAL_LINK:
            return {
                ...state,
                socialLinks: [action.socialLink, ...state.socialLinks],
            };
        case SET_SOCIAL_LINKS:
            return {
                ...state,
                socialLinks: [...action.socialLinks],
            };
        case SET_FOOTER_SOCIAL_LINKS:
            return {
                ...state,
                footerLinks: [...action.socialLinks],
            };
        case UPDATE_SOCIAL_LINK:
            return {
                ...state,
                socialLinks: replace(action.socialLink, state.socialLinks),
            };
        case DELETE_SOCIAL_LINK:
            return {
                ...state,
                socialLinks: deleteEl(action.id, state.socialLinks),
            };
        default:
            return state;
    }
};

export default socialLinkReducer;