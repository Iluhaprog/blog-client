import React from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import {create, remove} from '../../../../store/project/projectActions';
import {ProjectCard} from '../Card';
import {Row} from 'react-bootstrap';
import {useHistory} from 'react-router';
import {getEntityDataByLang} from '../../../../utils/data/data';

let ProjectCardList = (props) => {
  const {projects, lang, theme, remove} = props;
  const history = useHistory();

  return (
    <Row className={'justify-content-between'}>
      {
        projects.map((project) => {
          project = getEntityDataByLang(
              project,
              lang.title,
              'projectData',
          );
          return (
            <ProjectCard
              key={project.id}
              lang={lang}
              theme={theme}
              preview={project.preview}
              title={project.title}
              description={project.description}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
              onClick={() => history.push(`/admin/project/${project.id}`)}
              onDelete={() => remove(project.id)}
              isAdmin={true}
            />
          );
        })
      }
    </Row>
  );
};

ProjectCardList.propTypes = {
  projects: PropTypes.array,
  create: PropTypes.func,
  remove: PropTypes.func,
  lang: PropTypes.object,
  theme: PropTypes.string,
};

const mapStateToProps = (state) => ({
  projects: state.project.projects,
  isFetch: state.project.isFetch,
  lang: state.settings.lang,
  theme: state.settings.theme,
});
const mapDispatchToProps = (dispatch) => ({
  create: (project) => {
    dispatch(create(project));
  },
  remove: (id) => {
    dispatch(remove(id));
  },
});

ProjectCardList = connect(mapStateToProps, mapDispatchToProps)(ProjectCardList);

export {ProjectCardList};
