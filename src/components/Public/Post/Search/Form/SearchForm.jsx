import React from 'react';
import {Formik, Form, Field} from 'formik';
import {SearchInput} from '../../../UI/SearchInput';
import * as PropTypes from 'prop-types';
import {Container} from '../../../Container';

const SearchForm = ({submit, text}) => {
  return (
    <Formik
      onSubmit={submit}
      initialValues={{tags: ''}}
    >
      <Form>
        <Container maxWidth={800}>
          <Field
            name={'tags'}
          >
            {
              ({
                field,
                form,
              }) => (
                <SearchInput
                  mod={'big'}
                  name={field.name}
                  placeholder={text}
                  value={field.value}
                  onChange={(e) => {
                    form.setFieldValue(field.name, e.target.value);
                  }}
                />
              )
            }
          </Field>
        </Container>
      </Form>
    </Formik>
  );
};

SearchForm.propTypes = {
  submit: PropTypes.func,
  text: PropTypes.string,
};

export {SearchForm};
