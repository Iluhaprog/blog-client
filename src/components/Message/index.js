import msg from './Message';
import { connect } from 'react-redux';
import { showError } from '../../actoins/error';

const mapStateToProps = state => ({
    errors: state.error.array.filter(error => !error.showed),
});

const mapDispatchToProps = dispatch => ({
    show: id => {
        dispatch(showError(id));
    }
});

const Message = connect(mapStateToProps, mapDispatchToProps)(msg);

export {
    Message,
};