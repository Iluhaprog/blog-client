import React from 'react';
import {Formik, Form, Field} from 'formik';
import {Badge, Button, Container, Row} from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import {LoginFormBox} from './LoginFormBox';
import {connect} from 'react-redux';
import {login} from '../../../store/auth/authActions';
import {InputField} from '../../Field/Input';

let LoginForm = ({lang, login}) => {
  const submit = (values, actions) => {
    const {username, password} = values;
    login(username, password);
  };

  return (
    <LoginFormBox>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={submit}
      >
        <Form>
          <Container>
            <Row className='justify-content-center'>
              <h4>
                <Badge
                  variant={'secondary'}
                >
                  {lang.text.SIGN_IN}
                </Badge>
              </h4>
            </Row>
            <Field
              name='username'
              type={'text'}
              label={`${lang.label.LOGIN}:`}
              component={InputField}
              placeholder={`${lang.label.LOGIN}...`}
            />
            <Field
              name='password'
              type={'password'}
              label={`${lang.label.PASSWORD}:`}
              component={InputField}
              placeholder={`${lang.label.PASSWORD}...`}
            />
            <Row className='justify-content-center'>
              <Button
                style={{width: 'calc(100% - 30px)'}}
                variant={'primary'}
                type={'submit'}
              >
                {lang.text.SIGN_IN}
              </Button>
            </Row>
          </Container>
        </Form>
      </Formik>
    </LoginFormBox>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func,
  lang: PropTypes.object,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => {
    dispatch(login(username, password));
  },
});

LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export {LoginForm};
