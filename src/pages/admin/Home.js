import React from 'react';
import {HomeHeader} from '../../components/Home/Header';
import {Container} from 'react-bootstrap';

const Homes = () => {
  return (
    <section style={{paddingTop: '10px'}}>
      <Container>
        <HomeHeader />
      </Container>
    </section>
  );
};

export {Homes};
