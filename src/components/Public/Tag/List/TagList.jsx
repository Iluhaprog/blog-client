import React, {useEffect} from 'react';
import {Row} from '../../Row';
import {Tag} from '../../UI/Tag';
import PropTypes from 'prop-types';

const TagList = ({tags, getTags}) => {
  useEffect(() => {
    getTags();
  }, []);

  return (
    <Row justifyContent={'center'} wrap={'wrap'}>
      {
        tags?.map((tag) => (
          <Tag key={tag.id} mod={'big'} title={tag.title} />
        ))
      }
    </Row>
  );
};

TagList.propTypes = {
  tags: PropTypes.array,
  getTags: PropTypes.func,
};

export {TagList};
