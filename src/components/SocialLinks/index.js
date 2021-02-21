import sl from './SocialLinks';
import { connect } from 'react-redux';
import { 
    createSocialLinkFetch,
    updateSocialLinkFetch,
    updateSocialLinkPreviewFetch,
} from '../../actoins/socialLink';
import { addError } from '../../actoins/error';
import { getUniqueName } from '../../util/string/string';
import { setErrorCatch } from '../../util/SettingErrorCatch';

const mapStateToProps = state => ({
    socials: state.socialLink.socialLinks,
});

const mapDispatchToProps = dispatch => ({
    update: socialLink => {
        dispatch(updateSocialLinkFetch(socialLink))
    },
    updatePreview: (id, file) => {
        if (file) {
            const fd = new FormData();
            fd.append('file', new File([file], getUniqueName(file.name)));
            setErrorCatch(
                dispatch(updateSocialLinkPreviewFetch(id, fd)),
                e => {
                    dispatch(addError(e));
                }
            );
        }
    },
    create: socialLink => {
        dispatch(createSocialLinkFetch(socialLink));
    },
});

const SocialLinks = connect(mapStateToProps, mapDispatchToProps)(sl);

export {
    SocialLinks,
};