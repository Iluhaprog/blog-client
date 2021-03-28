import React from 'react';
import {ModalScreen} from '../../Styled/ModalScreen';
import * as PropTypes from 'prop-types';
import {Button, Container, Row} from 'react-bootstrap';
import {XSquare} from 'react-bootstrap-icons';
import {Formik, Form, Field} from 'formik';
import {InputField} from '../../../Field/Input';

const InputScreen = ({modal, theme, onSuccess, onClose}) => {
  const submit = (values) => {
    onSuccess(values);
  };

  return (
    <ModalScreen
      theme={theme}
      maxWidth={400}
      maxHeight={270}
    >
      <Container>
        <Row className='justify-content-between align-items-center'>
          <h4>{modal.title}</h4>
          <Button
            variant='danger'
            onClick={() => onClose()}
          >
            <XSquare />
          </Button>
        </Row>
        <hr />
        <Formik
          initialValues={{
            title: '',
          }}
          onSubmit={submit}
        >
          <Form>
            <Row className='justify-content-center'>
              <Field
                name='title'
                label={modal.description}
                component={InputField}
              />
            </Row>
            <Row className='justify-content-center'>
              <Button
                type='submit'
                variant='success'
                style={{minWidth: '120px'}}
              >
                Ok
              </Button>
            </Row>
          </Form>
        </Formik>
      </Container>
    </ModalScreen>
  );
};

InputScreen.propTypes = {
  modal: PropTypes.object,
  theme: PropTypes.string,
  onSuccess: PropTypes.func,
  onClose: PropTypes.func,
};

export {InputScreen};
