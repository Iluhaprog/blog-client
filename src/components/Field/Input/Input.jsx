import React from 'react';
import PropTypes from 'prop-types';
import {InputFieldWrapper} from './InputFieldWrapper';

const InputField = ({
  field,
  form,
  meta,
  label,
  ...props
}) => {
  return (
    <InputFieldWrapper>
      <label>{label}</label>
      <input
        {...field}
        onChange={field.onChange}
        value={field.value || ''}
        {...props}/>
    </InputFieldWrapper>
  );
};

InputField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
};

export {InputField};
