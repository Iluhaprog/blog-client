import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {connect} from 'react-redux';
import {selectProject} from '../../store/project/projectActions';
import PropTypes from 'prop-types';
import {Badge, Container, Row} from 'react-bootstrap';
import {ProjectUpdateForm} from '../../components/Admin/Project/UpdateForm';

let Project = ({select}) => {
  const {id} = useParams();

  useEffect(() => {
    select(+id);
  }, []);

  return (
    <section style={{padding: '10px 0'}}>
      <Container>
        <Row>
          <h2>
            <Badge variant={'secondary'}>
              Project
            </Badge>
          </h2>
        </Row>
        <ProjectUpdateForm />
      </Container>
    </section>
  );
};

Project.propTypes = {
  select: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  select: (id) => {
    dispatch(selectProject(id));
  },
});

Project = connect(mapStateToProps, mapDispatchToProps)(Project);

export {Project};
