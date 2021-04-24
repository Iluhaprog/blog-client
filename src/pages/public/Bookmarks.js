import React from 'react';
import {Container} from '../../components/Public/Container';
import {
  BookmarkListContainer,
} from '../../components/Public/Bookmark/Containers';

const Bookmarks = () => {
  return (
    <Container maxWidth={960}>
      <BookmarkListContainer />
    </Container>
  );
};

export {Bookmarks};
