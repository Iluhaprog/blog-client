import slf from './SocialLinkForm';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { deleteSocialLinkFetch } from '../../../actoins/socialLink';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    delete: id => {
        dispatch(deleteSocialLinkFetch(id));
    },
});

const SocialLinkForm = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    enableReinitialize: true,
})(slf));

export {
    SocialLinkForm,
};