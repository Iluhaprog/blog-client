import React from 'react';
import {HomeHeader} from '../../components/Admin/Home/Header';
import {Container} from 'react-bootstrap';
import {HomeList} from '../../components/Admin/Home/List';

const Homes = () => {
  return (
    <section style={{paddingTop: '10px'}}>
      <Container>
        <HomeHeader />
        <HomeList />
      </Container>
    </section>
  );
};

export {Homes};
