import {getVisible} from '../../../../store/post/postActions';
import {connect} from 'react-redux';
import {PostList} from '../List';
import {addBookmark} from '../../../../store/bookmark/bookmarkActions';

const mapStateToProps = (state) => ({
  total: state.post.total,
  posts: state.post.posts,
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (page) => {
    dispatch(getVisible(page));
  },
  addToBookmarks: (data) => {
    dispatch(addBookmark(data));
  },
});

const PostListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PostList);

export {PostListContainer};
