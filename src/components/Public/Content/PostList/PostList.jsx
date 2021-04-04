import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {PostListItem} from './PostListItem';

const PostListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const PostListContent = ({data}) => {
  return (
    <PostListBox>
      {
        data.posts?.map((post) => (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => alert(post.id)}
          />
        ))
      }
    </PostListBox>
  );
};

PostListContent.propTypes = {
  data: PropTypes.object,
};

export {PostListContent};
