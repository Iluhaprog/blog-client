import React from 'react';
import PropTypes from 'prop-types';
import {Formik, Form, Field} from 'formik';
import {Button, Col, Container, Row} from 'react-bootstrap';
import {FileField} from '../../Field/File/File';
import {InputField} from '../../Field/Input';

const SocialForm = (props) => {
  const submit = (values, actions) => {
    props.onUpdate({
      id: props.id,
      ...values,
    });
  };
  return (
    <li>
      <Formik
        initialValues={props.initialValues}
        onSubmit={submit}
      >
        <Form>
          <Container>
            <Row className='align-items-center'>
              <Col md={3}>
                <Field
                  name='preview'
                  showFileModal={props.showFileModal}
                  lang={props.lang}
                  component={FileField}
                />
              </Col>
              <Col md={7}>
                <Row>
                  <Field
                    name='title'
                    type='text'
                    label={`${props.lang.label.TITLE}:`}
                    component={InputField}
                    placeholder={`${props.lang.label.TITLE}...`}
                  />
                </Row>
                <Row>
                  <Field
                    name='link'
                    type='text'
                    label={`${props.lang.label.LINK}:`}
                    component={InputField}
                    placeholder={`${props.lang.label.LINK}...`}
                  />
                </Row>
              </Col>
              <Col md={2}>
                <Row>
                  <Col>
                    <Button
                      style={{
                        marginBottom: '20px',
                        width: '100px',
                        marginLeft: 'calc(100% - 100px)',
                      }}
                      variant='success'
                      type={'submit'}
                    >
                      {props.lang.button.SEND}
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      variant={'danger'}
                      style={{
                        marginTop: '20px',
                        width: '100px',
                        marginLeft: 'calc(100% - 100px)',
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        props.onDelete(props.id);
                      }}
                    >
                      {props.lang.button.DELETE}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Form>
      </Formik>
      <hr/>
    </li>
  );
};

SocialForm.propTypes = {
  id: PropTypes.number,
  initialValues: PropTypes.object,
  lang: PropTypes.object,
  showFileModal: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export {SocialForm};
