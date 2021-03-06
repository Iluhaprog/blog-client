import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {update} from '../../../../store/post/postActions';
import {connect} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import {FileField} from '../../Field/File/File';
import {
  initModal,
  setFormType,
  setVisible,
} from '../../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../../store/modal/ModalFormTypes';
import {Button, Col, Row} from 'react-bootstrap';
import {InputField} from '../../Field/Input';
import {TextareaField} from '../../Field/Textarea';
import {TagSelectField} from '../../Field/TagSelect';
import {getAll} from '../../../../store/tag/tagActions';
import {MdRedactorField} from '../../Field/MdRedactor';
import {VisibilityToggle} from '../../Toggle/Visibility';
import {
  getEntityDataByLang,
  updateEntityByLang,
} from '../../../../utils/data/data';

let PostUpdateForm = (props) => {
  const {tags, getAllTags, selected, lang, showFileModal, update} = props;
  const [isVisible] = useState(selected.isVisible);
  const initData = getEntityDataByLang(selected, lang.title, 'postData');
  const submit = (values) => {
    const updatedPost = updateEntityByLang({
      entity: selected,
      data: values,
      lang: lang.title,
      field: 'postData',
      getFields: (data) => ({
        title: data.title,
        description: data.description,
        text: data.text,
      }),
    });
    update({
      ...updatedPost,
      isVisible: values.isVisible,
      tags: values.tags,
      preview: values.preview,
    });
  };

  useEffect(() => {
    getAllTags();
  }, []);

  return (
    <Formik
      enableReinitialize
      initialValues={{...initData}}
      onSubmit={submit}
    >
      <Form>
        <Row className='align-items-center'>
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
            <Field
              name='tags'
              component={TagSelectField}
              lang={lang}
              tagList={tags}
              label={lang.label.SELECT_TAGS}
            />
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
        <hr />
        <Row>
          <Col md={12}>
            <Field
              name='text'
              label={`${lang.label.DESCRIPTION}:`}
              lang={lang}
              showFileModal={showFileModal}
              component={MdRedactorField}
              placeholder={`${lang.label.DESCRIPTION}...`}
            />
          </Col>
        </Row>
        <hr />
        <Field name='isVisible'>
          {
            ({form, field}) => {
              return (
                <VisibilityToggle
                  isVisible={isVisible}
                  show={() => form.setFieldValue(field.name, true)}
                  hide={() => form.setFieldValue(field.name, false)}
                />
              );
            }
          }
        </Field>
        <hr />
        <Button variant={'success'} type={'submit'}>
          {lang.button.SEND}
        </Button>
      </Form>
    </Formik>
  );
};

PostUpdateForm.propTypes = {
  selected: PropTypes.object,
  lang: PropTypes.object,
  tags: PropTypes.array,
  update: PropTypes.func,
  getAllTags: PropTypes.func,
  showFileModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  selected: state.post.selected,
  tags: state.tag.tags,
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({
  update: (post) => {
    dispatch(update(post));
  },
  showFileModal: (successHandler) => {
    dispatch(initModal({
      title: '',
      description: '',
      successHandler,
    }));
    dispatch(setFormType(ModalScreenTypes.FILE_SELECT));
    dispatch(setVisible(true));
  },
  getAllTags: () => {
    dispatch(getAll());
  },
});

PostUpdateForm = connect(mapStateToProps, mapDispatchToProps)(PostUpdateForm);

export {PostUpdateForm};
