import {BookmarkList as BL} from '../List';
import {
  removeBookmark,
} from '../../../../store/bookmark/bookmarkActions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  bookmarks: state.bookmark.bookmarks,
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({
  removeBookmark: (id) => {
    dispatch(removeBookmark(id));
  },
});

const BookmarkListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BL);

export {BookmarkListContainer};
