import React from 'react';
import {Container} from 'react-bootstrap';
import {DirHeader} from '../../components/Admin/Dir/Header';
import {DirList} from '../../components/Admin/Dir/List';

function Dirs() {
  return (
    <section style={{padding: '10px 0'}}>
      <Container>
        <DirHeader />
        <DirList />
      </Container>
    </section>
  );
}

Dirs.propTypes = {};

export {Dirs};
