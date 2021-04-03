import React from 'react';
import {Container} from 'react-bootstrap';
import {ProjectHeader} from '../../components/Project/Header';

function Projects() {
  return (
    <section style={{padding: '10px 0'}}>
      <Container>
        <ProjectHeader />
      </Container>
    </section>
  );
}

Projects.propTypes = {};

export {Projects};
