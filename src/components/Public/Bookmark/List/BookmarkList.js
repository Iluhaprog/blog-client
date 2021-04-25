import React, {useEffect} from 'react';
import {Row} from '../../Row';
import {BookmarkCard} from '../Card';
import * as PropTypes from 'prop-types';
import {Message} from '../../UI/Message';
import {Stars} from 'react-bootstrap-icons';
import {Separator} from '../../Separator';

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
      <Message>
        <Row justifyContent={'center'}>
          {
            !bookmarks.length &&
            (
              <>
                <Stars />
                <Separator indentLeft={20} />
                {lang.text.EMPTY}
              </>
            )
          }
        </Row>
      </Message>
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
