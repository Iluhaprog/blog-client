import React from 'react';
import { reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import { FormBox } from '../../boxes';
import { LabeledInput } from '../../formElements';
import { SendButton } from '../../buttons';
import './loginForm.scss';

function LoginForm(props) {
    const { err, handleSubmit } = props;
    return (
        <FormBox>
            <form onSubmit={handleSubmit} className='login-form'>
                <div className='column column_jc-c column_ai-c'>
                    <h1>Login</h1>
                    <LabeledInput 
                        label='Email' 
                        type='email' 
                        name='username' 
                        component='input'
                    />
                    <LabeledInput 
                        label='Password' 
                        type='password' 
                        name='password' 
                        component='input'
                        />
                    <SendButton text='Login'/>
                </div>
            </form>
            <NavLink to='/registration' className='link'>
                Registration
            </NavLink>
            <strong className={`error ${err.status === 403 && 'error_visible'}`}>
                Wrong email or password
            </strong>
        </FormBox>
    );
}

export default reduxForm({
    form: 'login',
})(LoginForm);