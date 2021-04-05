import React, {useEffect} from 'react';
import {getVisible} from '../../store/post/postActions';
import {addWindow} from '../../store/window/windowActions';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import * as uuid from 'uuid';
import {PostListContent} from '../../components/Public/Content/PostList';

let Posts = ({posts, total, getVisible, openWindow}) => {
  useEffect(() => {
    getVisible();
  }, []);

  useEffect(() => {
    openWindow(posts, total);
  }, [total]);

  return (
    <></>
  );
};

Posts.propTypes = {
  posts: PropTypes.object,
  total: PropTypes.number,
  getVisible: PropTypes.func,
  openWindow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  total: state.post.total,
});

const mapDispatchToProps = (dispatch) => ({
  getVisible: () => {
    dispatch(getVisible(0));
  },
  openWindow: (data, total) => {
    dispatch(addWindow({
      id: uuid.v4(),
      content: {page: 0, total, posts: data},
      title: 'Posts',
      component: PostListContent,
    }));
  },
});

Posts = connect(mapStateToProps, mapDispatchToProps)(Posts);

export {Posts};
