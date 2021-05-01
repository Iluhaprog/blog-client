import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Column} from '../../Column';
import {TagListContainer} from '../../Tag/Container';
import {SearchForm} from './Form';
import PropTypes from 'prop-types';
import {Separator} from '../../Separator';
import {PostList} from '../List';
import {getByTags} from '../../../../store/post/postActions';
import {addBookmark} from '../../../../store/bookmark/bookmarkActions';

let PostSearch = ({lang, post, search, tags, addToBookmarks}) => {
  const [queryTags, setQueryTags] = useState([]);

  const submit = (values) => {
    const enteredTags = values.tags.replace(/ /g, '').split(',');
    const existsTags = tags.filter((tag) => {
      return enteredTags.includes(tag.title);
    });
    setQueryTags(existsTags.map((tag) => tag.id));
  };

  useEffect(() => {
    search(queryTags, 0);
  }, [queryTags]);

  return (
    <Column>
      <SearchForm
        submit={submit}
        isFetch={post.isFetch}
        text={lang.text.WRITE_TAGS}
      />
      <Separator indentBottom={40} />
      <TagListContainer />
      <Separator indentBottom={40} />
      <PostList
        total={post.total}
        lang={lang}
        posts={post.posts}
        addToBookmarks={addToBookmarks}
        getPosts={(page) => search(queryTags, page)}
      />
    </Column>
  );
};

PostSearch.propTypes = {
  lang: PropTypes.object,
  post: PropTypes.object,
  tags: PropTypes.array,
  search: PropTypes.func,
  addToBookmarks: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
  post: state.post,
  tags: state.tag.tags,
});

const mapDispatchToProps = (dispatch) => ({
  search: (tags, page) => {
    dispatch(getByTags(tags, page));
  },
  addToBookmarks: (data) => {
    dispatch(addBookmark(data));
  },
});

PostSearch = connect(mapStateToProps, mapDispatchToProps)(PostSearch);

export {PostSearch};
