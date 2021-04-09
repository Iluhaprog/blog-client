import React from 'react';
import {Formik, Form, Field} from 'formik';
import PropTypes from 'prop-types';
import {InputField} from '../../Field/Input';
import {create} from '../../../../store/tag/tagActions';
import {connect} from 'react-redux';
import {Button, Row} from 'react-bootstrap';

let TagForm = ({lang, tags, addTag}) => {
  const submit = (values) => {
    addTag(values.title);
  };

  return (
    <Formik
      initialValues={{
        title: '',
      }}
      onSubmit={submit}
    >
      <Form>
        <Row className={'flex-nowrap align-items-end'}>
          <Field
            name='title'
            component={InputField}
            lang={lang}
            tagList={tags}
            label={`${lang.label.WRITE_TAG_TITLE}: `}
            placeholder={`${lang.label.WRITE_TAG_TITLE}...`}
          />
          <Button
            type={'submit'}
            style={{marginBottom: '15px', marginLeft: '10px'}}
          >
            {lang.button.SEND}
          </Button>
        </Row>
      </Form>
    </Formik>
  );
};

TagForm.propTypes = {
  lang: PropTypes.object,
  tags: PropTypes.array,
  addTag: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
  tags: state.tag.tags,
});

const mapDispatchToProps = (dispatch) => ({
  addTag: (title) => {
    dispatch(create({title}));
  },
});

TagForm = connect(mapStateToProps, mapDispatchToProps)(TagForm);

export {TagForm};
