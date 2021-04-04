import React from 'react';
import {Button} from 'react-bootstrap';
import {Image} from 'react-bootstrap-icons';
import PropTypes from 'prop-types';
import {FilePreviewWrapper} from './FilePreviewWrapper';
import {FileFieldWrapper} from './FileFieldWrapper';

const FileField = ({
  field,
  form,
  meta,
  showFileModal,
  lang,
}) => {
  const API_URL = process.env.REACT_APP_API_URL;
  return (
    <FileFieldWrapper>
      <FilePreviewWrapper>
        {field.value ? (
          <img
            width={'200px'}
            height={'200px'}
            src={`${API_URL}/${field.value}`}
            alt={'preview'}
          />
        ) : (
          <Image />
        )
        }
      </FilePreviewWrapper>
      <Button
        variant={'primary'}
        onClick={() => showFileModal((name) => {
          form.setFieldValue(field.name, name);
        })}
      >
        {lang.button.SELECT_PICTURE}
      </Button>
    </FileFieldWrapper>
  );
};

FileField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  meta: PropTypes.object,
  showFileModal: PropTypes.func,
  lang: PropTypes.object,
};

export {FileField};
