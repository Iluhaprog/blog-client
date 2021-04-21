import React from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Row} from 'react-bootstrap';
import {update} from '../../../../store/project/projectActions';
import {connect} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import {
  initModal,
  setFormType,
  setVidible,
} from '../../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../../store/modal/ModalFormTypes';
import {FileField} from '../../Field/File/File';
import {InputField} from '../../Field/Input';
import {TextareaField} from '../../Field/Textarea';
import {
  getEntityDataByLang,
  updateEntityByLang,
} from '../../../../utils/data/data';

let ProjectUpdateForm = (props) => {
  const {initialValues, showFileModal, update, lang} = props;
  const initData = getEntityDataByLang(
      initialValues,
      lang.title,
      'projectData',
  );

  const submit = (values) => {
    const updatedProject = updateEntityByLang({
      entity: initialValues,
      data: values,
      lang: lang.title,
      field: 'projectData',
      getFields: (data) => ({
        title: data.title,
        description: data.description,
      }),
    });
    update({
      ...updatedProject,
      githubLink: values.githubLink,
      projectLink: values.projectLink,
    });
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{...initData}}
      onSubmit={submit}
    >
      <Form>
        <Row>
          <Col md={3}>
            <Field
              name='preview'
              showFileModal={showFileModal}
              lang={lang}
              component={FileField}
            />
          </Col>
          <Col md={9}>
            <Field
              name='title'
              type='text'
              label={`${lang.label.TITLE}:`}
              component={InputField}
              placeholder={`${lang.label.TITLE}...`}
            />
            <Row>
              <Col md={6}>
                <Field
                  name='projectLink'
                  type='text'
                  label={`${lang.label.PROJECT_LINK}:`}
                  component={InputField}
                  placeholder={`${lang.label.PROJECT_LINK}...`}
                />
              </Col>
              <Col md={6}>
                <Field
                  name='githubLink'
                  type='text'
                  label={`${lang.label.GITHUB_LINK}:`}
                  component={InputField}
                  placeholder={`${lang.label.GITHUB_LINK}...`}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Field
              name='description'
              label={`${lang.label.DESCRIPTION}:`}
              component={TextareaField}
              placeholder={`${lang.label.DESCRIPTION}...`}
            />
          </Col>
        </Row>
        <Button
          variant={'success'}
          type={'submit'}
        >
          {lang.button.SEND}
        </Button>
      </Form>
    </Formik>
  );
};

ProjectUpdateForm.propTypes = {
  lang: PropTypes.object,
  initialValues: PropTypes.object,
  showFileModal: PropTypes.func,
  update: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
  initialValues: state.project.selected,
});

const mapDispatchToProps = (dispatch) => ({
  update: (project) => {
    dispatch(update(project));
  },
  showFileModal: (successHandler) => {
    dispatch(initModal({
      title: '',
      description: '',
      successHandler,
    }));
    dispatch(setFormType(ModalScreenTypes.FILE_SELECT));
    dispatch(setVidible(true));
  },
});

ProjectUpdateForm = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProjectUpdateForm);

export {ProjectUpdateForm};
