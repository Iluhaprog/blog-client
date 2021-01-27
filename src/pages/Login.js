import { connect } from 'react-redux';
import { LoginForm } from '../components/LoginForm';
import { loginFetch } from '../actoins/user';

const Login = props => {
    const { status, errorData } = props;

    const submit = values => {
        props.login(values.username, values.password);
    };

    return (
        <>
            <LoginForm onSubmit={submit} err={{status, errorData}}/>
        </>
    );
};

const mapStateToProps = state => ({
    status: state.user.status,
    errorData: state.user.errorData,
});

const mapDispatchToProps = dispatch => ({
    login: (username, password) => {
        dispatch(loginFetch(username, password));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);