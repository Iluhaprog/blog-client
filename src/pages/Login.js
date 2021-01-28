import { connect } from 'react-redux';
import { LoginForm } from '../components/forms';
import { loginFetch } from '../actoins/user';
import { Center } from '../components/containers';

const Login = props => {
    const { status, errorData } = props;

    const submit = values => {
        props.login(values.username, values.password);
    };

    return (
        <Center>
            <LoginForm onSubmit={submit} err={{status, errorData}}/>
        </Center>
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