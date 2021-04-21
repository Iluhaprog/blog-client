import React, {useEffect} from 'react';
import {PageTitle} from '../../UI/PageTitle';
import PropTypes from 'prop-types';
import {getAll} from '../../../../store/project/projectActions';
import {connect} from 'react-redux';
import {Row} from '../../Row';
import {ProjectCard} from '../Card';
import {Separator} from '../../Separator';
import {getEntityDataByLang} from '../../../../utils/data/data';

let ProjectList = ({lang, projects, getProjects}) => {
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <PageTitle>{lang.nav.PROJECTS}</PageTitle>
      <Separator indentBottom={50}/>
      <Row justifyContent={'space-between'} wrap={'wrap'}>
        {
          projects?.map((project) => {
            project = getEntityDataByLang(
                project,
                lang.title,
                'projectData',
            );
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                projectLink={project.projectLink}
                githubLink={project.githubLink}
                preview={project.preview}
              />
            );
          })
        }
      </Row>
    </>
  );
};

ProjectList.propTypes = {
  lang: PropTypes.object,
  projects: PropTypes.array,
  getProjects: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
  projects: state.project.projects,
});

const mapDispatchToProps = (dispatch) => ({
  getProjects: () => {
    dispatch(getAll());
  },
});

ProjectList = connect(mapStateToProps, mapDispatchToProps)(ProjectList);

export {ProjectList};
