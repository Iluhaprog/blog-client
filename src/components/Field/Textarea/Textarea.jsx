import React from 'react';
import PropTypes from 'prop-types';
import {FieldWrapper} from '../Styled/FieldWrapper';

const TextareaField = ({
  field,
  form,
  meta,
  label,
  ...props
}) => {
  return (
    <FieldWrapper>
      <label>{label}</label>
      <textarea {...field} {...props}>{field.value}</textarea>
    </FieldWrapper>
  );
};

TextareaField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
};

export {TextareaField};
