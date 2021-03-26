import React from 'react';
import {Formik, Form, Field} from 'formik';
import {Badge, Button, Col, Container, Row} from 'react-bootstrap';
import {InputField} from '../../Field/Input';
import {updatePassword} from '../../../store/user/userActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

let UserUpdatePasswordForm = (props) => {
  const {lang} = props;
  const submit = (values, actions) => {
    const creds = {
      id: props.userId,
      ...values,
    };
    props.update(creds);
  };
  return (
    <Formik
      initialValues={{}}
      onSubmit={submit}
    >
      <Form style={{paddingBottom: '20px'}}>
        <Container>
          <h3>
            <Badge variant={'secondary'}>{lang.text.CHANGE_PASSWORD}</Badge>
          </h3>
          <Row>
            <Col md={4}>
              <Field
                name='oldPassword'
                type='password'
                label={`${lang.label.OLD_PASSWORD}:`}
                component={InputField}
                placeholder={`${lang.label.OLD_PASSWORD}...`}
              />
            </Col>
            <Col md={4}>
              <Field
                name='newPassword'
                type='password'
                label={`${lang.label.NEW_PASSWORD}:`}
                component={InputField}
                placeholder={`${lang.label.NEW_PASSWORD}...`}
              />
            </Col>
            <Col md={4}>
              <Field
                name='newPasswordRepeat'
                type='password'
                label={`${lang.label.NEW_REPEAT_PASSWORD}:`}
                component={InputField}
                placeholder={`${lang.label.NEW_REPEAT_PASSWORD}...`}
              />
            </Col>
          </Row>
          <Button
            type={'submit'}
            variant={'success'}
          >
            {lang.button.SEND}
          </Button>
        </Container>
      </Form>
    </Formik>
  );
};

UserUpdatePasswordForm.propTypes = {
  userId: PropTypes.number,
  isFetch: PropTypes.bool,
  lang: PropTypes.object,
  update: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userId: state.user.data.id,
  isFetch: state.user.isFetch,
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({
  update: (creds) => {
    dispatch(updatePassword(creds));
  },
});

UserUpdatePasswordForm = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserUpdatePasswordForm);

export {UserUpdatePasswordForm};


