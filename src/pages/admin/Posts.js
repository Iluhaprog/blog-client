import React from 'react';
import {Container} from 'react-bootstrap';
import {PostHeader} from '../../components/Post/Header';

function Posts() {
  return (
    <section style={{padding: '10px 0'}}>
      <Container>
        <PostHeader />
      </Container>
    </section>
  );
}

Posts.propTypes = {};

export {Posts};
