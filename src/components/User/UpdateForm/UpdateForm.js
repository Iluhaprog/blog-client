import React from 'react';
import {connect} from 'react-redux';
import {update} from '../../../api/user';
import {
  initModal,
  setFormType,
  setVidible,
} from '../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../store/modal/ModalFormTypes';
import {Container} from 'react-bootstrap';
import {Field, Form, Formik} from 'formik';
import PropTypes from 'prop-types';
import {FileField} from '../../Field/File/File';

let UserUpdateForm = (props) => {
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
          <Field
            name='avatar'
            showFileModal={props.showFileModal}
            lang={props.lang}
            component={FileField}
          />
          <button type='submit'>Send</button>
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
