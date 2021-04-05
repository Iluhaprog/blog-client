import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import {getAll} from '../../store/project/projectActions';
import {addWindow} from '../../store/window/windowActions';
import * as uuid from 'uuid';
import {connect} from 'react-redux';
import {ProjectListContent} from '../../components/Public/Content/ProjectList';

let Projects = ({projects, getProjects, openWindow}) => {
  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    openWindow(projects);
  }, [projects]);

  return (
    <></>
  );
};

Projects.propTypes = {
  projects: PropTypes.array,
  getProjects: PropTypes.func,
  openWindow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  projects: state.project.projects,
});

const mapDispatchToProps = (dispatch) => ({
  getProjects: () => {
    dispatch(getAll());
  },
  openWindow: (data) => {
    dispatch(addWindow({
      id: uuid.v4(),
      content: {projects: data},
      title: 'Projects',
      component: ProjectListContent,
    }));
  },
});

Projects = connect(mapStateToProps, mapDispatchToProps)(Projects);

export {Projects};
