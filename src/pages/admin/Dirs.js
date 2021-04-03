import React from 'react';
import {Container} from 'react-bootstrap';
import {DirHeader} from '../../components/Dir/Header';

function Dirs() {
  return (
    <section style={{padding: '10px 0'}}>
      <Container>
        <DirHeader />
      </Container>
    </section>
  );
}

Dirs.propTypes = {};

export {Dirs};
