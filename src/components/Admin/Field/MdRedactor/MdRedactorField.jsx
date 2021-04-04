import React from 'react';
import {Button, Tab, Tabs} from 'react-bootstrap';
import {TextareaField} from '../Textarea';
import PropTypes from 'prop-types';
import {PreviewBox} from './PreviewBox';

const MdRedactorField = ({
  field,
  form,
  meta,
  showFileModal,
  lang,
}) => {
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <Tabs defaultActiveKey={'md'} variant={'pills'}>
      <Tab eventKey={'md'} title={'Markdown'}>
        <TextareaField
          field={field}
          form={form}
          meta={meta}
          label={''}
        />
        <Button variant={'primary'} onClick={() => showFileModal((name) => {
          const img = `![${name}](${API_URL}/${name})`;
          form.setFieldValue(field.name, field.value + '\n' + img);
        })}>
          {lang.button.SELECT_PICTURE}
        </Button>
      </Tab>
      <Tab eventKey={'preview'} title={'Preview'}>
        <PreviewBox
          md={field.value}
        />
      </Tab>
    </Tabs>
  );
};

MdRedactorField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  meta: PropTypes.object,
  showFileModal: PropTypes.func,
  lang: PropTypes.object,
};

export {MdRedactorField};
