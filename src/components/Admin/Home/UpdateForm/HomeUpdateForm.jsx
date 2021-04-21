import React from 'react';
import {Formik, Form, Field} from 'formik';
import PropTypes from 'prop-types';
import {InputField} from '../../Field/Input';
import {Button, Col, Row} from 'react-bootstrap';
import {TextareaField} from '../../Field/Textarea';
import styled from 'styled-components';
import {VisibilityToggle} from '../../Toggle/Visibility';
import {themes} from '../../../../store/settings/settingsReducer';
import {
  getEntityDataByLang,
  updateEntityByLang,
} from '../../../../utils/data/data';

const FormBox = styled.div`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, .3);
  margin: 20px 0;
  background-color: ${({theme}) => {
    return theme === themes.DARK ? '#2a2c32' : '#f8f9fa';
  }};
`;

const HomeUpdateForm = (props) => {
  const {initialValues, lang, remove, update, theme} = props;
  const initData = getEntityDataByLang(
      initialValues,
      lang.title,
      'homeData',
  );
  const submit = (values) => {
    const updatedHome = updateEntityByLang({
      entity: initialValues,
      data: values,
      lang: lang.title,
      field: 'homeData',
      getFields: (data) => ({
        title: data.title,
        description: data.description,
      }),
    });
    update({
      ...updatedHome,
      isVisible: values.isVisible,
    });
  };

  return (
    <FormBox theme={theme}>
      <Formik
        enableReinitialize
        initialValues={initData}
        onSubmit={submit}
      >
        <Form>
          <Row>
            <Col md={12}>
              <Field
                name='title'
                type='text'
                label={`${lang.label.TITLE}:`}
                component={InputField}
                placeholder={`${lang.label.TITLE}...`}
              />
            </Col>
            <Col md={12}>
              <Field
                name='description'
                label={`${lang.label.DESCRIPTION}:`}
                component={TextareaField}
                placeholder={`${lang.label.DESCRIPTION}...`}
              />
            </Col>
          </Row>
          <Row className={'justify-content-between'}>
            <Col md={5}>
              <Button
                variant={'success'}
                type={'submit'}
                style={{marginRight: '10px'}}
              >
                {lang.button.SEND}
              </Button>
              <Button
                variant={'danger'}
                onClick={() => remove()}
              >
                {lang.button.DELETE}
              </Button>
            </Col>
            <div style={{paddingRight: '20px'}}>
              <VisibilityToggle
                isVisible={initialValues.selected}
                show={() => {
                  update({
                    ...initialValues,
                    selected: true,
                  });
                }}
                hide={() => {
                  update({
                    ...initialValues,
                    selected: false,
                  });
                }}
              />
            </div>
          </Row>
        </Form>
      </Formik>
    </FormBox>
  );
};

HomeUpdateForm.propTypes = {
  theme: PropTypes.string,
  lang: PropTypes.object,
  initialValues: PropTypes.object,
  update: PropTypes.func,
  remove: PropTypes.func,
};

export {HomeUpdateForm};
