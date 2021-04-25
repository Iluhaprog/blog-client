import React, {useEffect} from 'react';
import {Row} from '../../Row';
import {BookmarkCard} from '../Card';
import * as PropTypes from 'prop-types';

const BookmarkList = ({bookmarks, lang, removeBookmark, toggleView}) => {
  useEffect(() => {
    toggleView();
  }, []);

  return (
    <Row justifyContent={'flex-start'} wrap={'wrap'}>
      {
        bookmarks?.map((bookmark) => (
          <BookmarkCard
            key={bookmark.id}
            data={bookmark.data}
            lang={lang}
            onDelete={() => removeBookmark(bookmark.id)}
          />
        ))
      }
    </Row>
  );
};

BookmarkList.propTypes = {
  bookmarks: PropTypes.array,
  lang: PropTypes.object,
  removeBookmark: PropTypes.func,
  toggleView: PropTypes.func,
};

export {BookmarkList};
