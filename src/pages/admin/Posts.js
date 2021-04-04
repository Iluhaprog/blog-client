import React from 'react';
import {Container} from 'react-bootstrap';
import {PostHeader} from '../../components/Admin/Post/Header';
import {PostCardList} from '../../components/Admin/Post/CardList';

function Posts() {
  return (
    <section style={{padding: '10px 0'}}>
      <Container>
        <PostHeader />
        <PostCardList />
      </Container>
    </section>
  );
}

Posts.propTypes = {};

export {Posts};
