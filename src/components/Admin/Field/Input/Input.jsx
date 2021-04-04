import React from 'react';
import PropTypes from 'prop-types';
import {FieldWrapper} from '../Styled/FieldWrapper';

const InputField = ({
  field,
  form,
  meta,
  label,
  ...props
}) => {
  return (
    <FieldWrapper>
      <label>{label}</label>
      <input
        {...field}
        onChange={field.onChange}
        value={field.value || ''}
        {...props}/>
    </FieldWrapper>
  );
};

InputField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
};

export {InputField};
