import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {PostListItem} from './PostListItem';
import {Paginate} from '../../Paginate';
import {useDispatch, useSelector} from 'react-redux';
import {getAll} from '../../../../store/post/postActions';

const PostListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const PostListContent = ({data, onUpdate}) => {
  const [page, setPage] = useState(data.page);
  const [isChanged, setIsChanged] = useState(false);
  const post = useSelector(
      (state) => state.post,
  );
  const dispatch = useDispatch();

  const handlePageClick = (data) => {
    const selected = data.selected * process.env.REACT_APP_PAGINATION_LIMIT;
    setPage(selected);
    setIsChanged(true);
  };

  useEffect(() => {
    dispatch(getAll(page));
  }, [page]);

  useEffect(() => {
    if (isChanged) {
      onUpdate({
        page: page,
        posts: post.posts,
        total: post.total,
      });
      setIsChanged(false);
    }
  }, [post.posts]);

  return (
    <>
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
      <Paginate
        total={data.total}
        limit={9}
        onClick={handlePageClick}
      />
    </>
  );
};

PostListContent.propTypes = {
  data: PropTypes.object,
  onUpdate: PropTypes.func,
};

export {PostListContent};
