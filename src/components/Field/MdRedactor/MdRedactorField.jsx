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
  return (
    <Tabs defaultActiveKey={'md'} variant={'pills'}>
      <Tab eventKey={'md'} title={'Markdown'}>
        <TextareaField
          field={field}
          form={form}
          meta={meta}
          label={''}
        />
        <Button variant={'primary'} onClick={() => showFileModal()}>
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
