import { connect } from 'react-redux';
import { clearModal, setFail } from '../../../actoins/modal';
import m from './Modal';

const mapStateToProps = state => ({
    modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
    close: () => dispatch(clearModal()),
    setFail: message => dispatch(setFail(message)),
});

const Modal = connect(mapStateToProps, mapDispatchToProps)(m);

export {
    Modal,
};