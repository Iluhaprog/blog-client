import React from 'react';
import {connect} from 'react-redux';
import {update} from '../../../../store/user/userActions';
import {
  initModal,
  setFormType,
  setVisible,
} from '../../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../../store/modal/ModalFormTypes';
import {Badge, Button, Col, Container, Row, Spinner} from 'react-bootstrap';
import {Field, Form, Formik} from 'formik';
import PropTypes from 'prop-types';
import {FileField} from '../../Field/File/File';
import {InputField} from '../../Field/Input';
import {TextareaField} from '../../Field/Textarea';
import {
  getEntityDataByLang,
  updateEntityByLang,
} from '../../../../utils/data/data';

let UserUpdateForm = (props) => {
  const {lang, isFetch, user} = props;

  const submit = (values) => {
    const updatedUser = updateEntityByLang({
      entity: user,
      data: values,
      lang: lang.title,
      field: 'userData',
      getFields: (data) => ({
        firstName: data.firstName,
        lastName: data.lastName,
        about: data.about,
      }),
    });
    props.update({
      ...updatedUser,
      skills: values.skills,
      avatar: values.avatar,
    });
  };

  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={submit}
      enableReinitialize
    >
      <Form style={{paddingTop: '20px'}}>
        <Container>
          <h3>
            <Badge variant={'secondary'}>{lang.text.EDIT_PROFILE}</Badge>
          </h3>
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
          <Row>
            <Col md={12}>
              <Field
                name='skills'
                label={`${lang.label.SKILLS}:`}
                component={InputField}
                placeholder={`${lang.label.SKILLS}...`}
              />
            </Col>
          </Row>
          <Button
            variant={'success'}
            type='submit'
          >
            {lang.button.SEND}
          </Button>
          <Spinner
            style={{marginLeft: '10px', opacity: +isFetch}}
            size='sm'
            animation='border'
            variant='light'
          />
        </Container>
      </Form>
    </Formik>
  );
};

UserUpdateForm.propTypes = {
  userId: PropTypes.number,
  user: PropTypes.object,
  isFetch: PropTypes.bool,
  initialValues: PropTypes.object,
  showFileModal: PropTypes.func,
  update: PropTypes.func,
  lang: PropTypes.object,
};

const mapStateToProps = (state) => ({
  userId: state.user.data.id,
  user: state.user.data,
  isFetch: state.user.isFetch,
  lang: state.settings.lang,
  initialValues: getEntityDataByLang(
      state.user.data,
      state.settings.lang.title,
      'userData',
  ),
});

const mapDispatchToProps = (dispatch) => ({
  showFileModal: (successHandler) => {
    dispatch(initModal({
      title: '',
      description: '',
      successHandler,
    }));
    dispatch(setFormType(ModalScreenTypes.FILE_SELECT));
    dispatch(setVisible(true));
  },
  update: (user) => {
    dispatch(update(user));
  },
});

UserUpdateForm = connect(mapStateToProps, mapDispatchToProps)(UserUpdateForm);

export {UserUpdateForm};
