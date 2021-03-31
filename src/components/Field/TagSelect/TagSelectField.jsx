import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {FieldWrapper} from '../Styled/FieldWrapper';
import {Badge, Dropdown} from 'react-bootstrap';

const TagSelectField = ({
  field,
  form,
  meta,
  lang,
  label,
  tagList,
}) => {
  useEffect(() => {
    console.log(field.value);
    console.log(tagList);
  }, []);

  const selectTag = (tag) => {
    const hasTag = field.value?.filter((t) => t.id === tag.id).length !== 0;
    if (!hasTag) {
      form.setFieldValue(field.name, [
        ...field.value,
        tag,
      ]);
    }
  };

  const removeTag = (id) => {
    const tags = field.value.filter((tag) => tag.id !== id);
    form.setFieldValue(field.name, tags);
  };

  return (
    <FieldWrapper>
      <label>{label}:</label>
      <div className={'field-box'}>
        {
          field.value?.map((tag) => (
            <Badge
              key={tag.id}
              variant={'secondary'}
              style={{marginRight: '10px'}}
              onClick={() => removeTag(tag.id)}
            >
              {tag.title}
            </Badge>
          ))
        }
      </div>
      <Dropdown
        style={{marginTop: '15px'}}
      >
        <Dropdown.Toggle variant={'primary'}>
          {label}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {
            tagList?.map((tag) => (
              <Dropdown.Item
                key={tag.id}
                onClick={() => selectTag(tag)}
              >
                {tag.title}
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
    </FieldWrapper>
  );
};

TagSelectField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  meta: PropTypes.object,
  lang: PropTypes.object,
  label: PropTypes.string,
  tagList: PropTypes.array,
};

export {TagSelectField};
