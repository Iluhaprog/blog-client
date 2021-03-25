import React from 'react';
import {connect} from 'react-redux';
import {update} from '../../../api/user';
import {
  initModal,
  setFormType,
  setVidible,
} from '../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../store/modal/ModalFormTypes';
import {Button, Col, Container, Row} from 'react-bootstrap';
import {Field, Form, Formik} from 'formik';
import PropTypes from 'prop-types';
import {FileField} from '../../Field/File/File';
import {InputField} from '../../Field/Input';
import {TextareaField} from '../../Field/Textarea';

let UserUpdateForm = (props) => {
  const {lang} = props;

  const submit = (values, actions) => {
    console.log(values);
  };

  return (
    <Container>
      <Formik
        initialValues={props.initialValues}
        onSubmit={submit}
      >
        <Form>
          <Row className='align-items-center justify-content-center'>
            <Col md={4}>
              <Field
                name='avatar'
                showFileModal={props.showFileModal}
                lang={props.lang}
                component={FileField}
              />
            </Col>
            <Col md={4}>
              <Field
                name='firstName'
                type='text'
                label={`${lang.label.FIRST_NAME}:`}
                component={InputField}
                placeholder={`${lang.label.FIRST_NAME}...`}
              />
              <Field
                name='lastName'
                type='text'
                label={`${lang.label.LAST_NAME}:`}
                component={InputField}
                placeholder={`${lang.label.LAST_NAME}...`}
              />
            </Col>
            <Col md={4}>
              <Field
                name='login'
                type='text'
                label={`${lang.label.LOGIN}:`}
                component={InputField}
                placeholder={`${lang.label.LOGIN}...`}
              />
              <Field
                name='email'
                type='email'
                label={`${lang.label.EMAIL}:`}
                component={InputField}
                placeholder={`${lang.label.EMAIL}...`}
              />
            </Col>
          </Row>
          <hr/>
          <Row className='justify-content-center'>
            <Col md={12}>
              <Field
                name='about'
                label={`${lang.label.ABOUT_ME}:`}
                component={TextareaField}
                placeholder={`${lang.label.ABOUT_ME}...`}
              />
            </Col>
          </Row>
          <Button
            variant={'success'}
            type='submit'
          >
            {lang.button.SEND}
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

UserUpdateForm.propTypes = {
  userId: PropTypes.number,
  isFetch: PropTypes.bool,
  initialValues: PropTypes.object,
  showFileModal: PropTypes.func,
  update: PropTypes.func,
  lang: PropTypes.object,
};

const mapStateToProps = (state) => ({
  userId: state.user.data.id,
  isFetch: state.user.isFetch,
  lang: state.settings.lang,
  initialValues: {
    ...state.user.data,
  },
});

const mapDispatchToProps = (dispatch) => ({
  showFileModal: (successHandler) => {
    dispatch(initModal({
      title: '',
      description: '',
      successHandler,
    }));
    dispatch(setFormType(ModalScreenTypes.FILE_SELECT));
    dispatch(setVidible(true));
  },
  update: (user) => {
    dispatch(update(user));
  },
});

UserUpdateForm = connect(mapStateToProps, mapDispatchToProps)(UserUpdateForm);

export {UserUpdateForm};
