import soc from './Socials';
import { connect } from 'react-redux'
import { setFooterSocialLinksFetch } from '../../actoins/socialLink';

const mapStateToProps = state => ({
    links: state.socialLink.footerLinks,
});
const mapDispatchToProps = dispatch => ({
    getLinks: () => {
        dispatch(setFooterSocialLinksFetch());
    }
});

const Socials = connect(mapStateToProps, mapDispatchToProps)(soc);

export { Socials };