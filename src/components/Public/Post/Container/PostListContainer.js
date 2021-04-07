import {getVisible} from '../../../../store/post/postActions';
import {connect} from 'react-redux';
import {PostList} from '../List';

const mapStateToProps = (state) => ({
  total: state.post.total,
  posts: state.post.posts,
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (page) => {
    dispatch(getVisible(page));
  },
});

const PostListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PostList);

export {PostListContainer};
