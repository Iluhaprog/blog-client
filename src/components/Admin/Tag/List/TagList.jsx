import React, {useEffect} from 'react';
import {Button, Row} from 'react-bootstrap';
import {getAll, remove} from '../../../../store/tag/tagActions';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const TagBox = styled.div`
  padding: 5px;
`;

let TagList = ({tags, remove, getTags}) => {
  useEffect(() => {
    getTags();
  }, []);

  return (
    <Row>
      {
        tags?.map((tag) => (
          <TagBox key={tag.id}>
            <Button
              variant={'secondary'}
              onClick={() => remove(tag.id)}
            >
              {tag.title}
            </Button>
          </TagBox>
        ))
      }
    </Row>
  );
};

TagList.propTypes = {
  tags: PropTypes.array,
  remove: PropTypes.func,
  getTags: PropTypes.func,
};

const mapStateToProps = (state) => ({
  tags: state.tag.tags,
});

const mapDispatchToProps = (dispatch) => ({
  getTags: () => {
    dispatch(getAll());
  },
  remove: (id) => {
    dispatch(remove(id));
  },
});

TagList = connect(mapStateToProps, mapDispatchToProps)(TagList);

export {TagList};
