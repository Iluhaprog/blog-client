import {TagList} from '../List';
import {connect} from 'react-redux';
import {getAll} from '../../../../store/tag/tagActions';

const mapStateToProps = (state) => ({
  tags: state.tag.tags,
});

const mapDispatchToProps = (dispatch) => ({
  getTags: () => {
    dispatch(getAll());
  },
});

const TagListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TagList);

export {TagListContainer};
