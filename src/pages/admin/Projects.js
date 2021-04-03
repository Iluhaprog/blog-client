import React, {useEffect} from 'react';
import {Container} from 'react-bootstrap';
import {ProjectHeader} from '../../components/Project/Header';
import * as PropTypes from 'prop-types';
import {ProjectCardList} from '../../components/Project/CardList';
import {connect} from 'react-redux';
import {getAll} from '../../store/project/projectActions';

let Projects = ({getAll}) => {
  useEffect(() => {
    getAll();
  }, []);

  return (
    <section style={{padding: '10px 0'}}>
      <Container>
        <ProjectHeader />
        <ProjectCardList />
      </Container>
    </section>
  );
};

Projects.propTypes = {
  getAll: PropTypes.func,
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  getAll: () => {
    dispatch(getAll());
  },
});

Projects = connect(mapStateToProps, mapDispatchToProps)(Projects);

export {Projects};
