import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Image} from '../../../UI/Image';
import {PushButton} from '../../../UI/Button/Push';
import empty from '../../../../../assets/brkImg.png';

const PostItemBox = styled.div`
  border: 1px solid #000;
  padding: 5px;
  max-width: 320px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h3 {
    font-family: var(--public-font);
  }
  
  button {
    margin: 5px;
  }
`;

const Tag = styled.span`
  margin: 5px;
  border: 1px dotted #000;
  padding: 2px;
`;

const PostListItem = ({post, onClick}) => {
  const API_URL = process.env.REACT_APP_API_URL;
  return (
    <PostItemBox>
      <div>
        <Image
          width={300}
          height={200}
          src={post.preview ? `${API_URL}/${post?.preview}` : empty}
        />
        <div>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      </div>
      <div>
        <div
          style={{
            display: 'flex', flexWrap: 'wrap',
          }}
        >
          {
            post.tags?.map((tag) => (
              <Tag key={tag.id}>{tag.title}</Tag>
            ))
          }
        </div>
        <PushButton
          onClick={onClick}
        >
          Read
        </PushButton>
      </div>
    </PostItemBox>
  );
};

PostListItem.propTypes = {
  post: PropTypes.object,
  onClick: PropTypes.func,
};

export {PostListItem};
