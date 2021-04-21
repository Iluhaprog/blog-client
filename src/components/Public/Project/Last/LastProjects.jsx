import React, {useEffect} from 'react';
import {getAll} from '../../../../store/project/projectActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Background} from '../../UI/Background';
import bg from '../../../../assets/public/bg/mainPRJ.jpg';
import {Card} from '../../UI/Card';
import {Row} from '../../Row';
import {Container} from '../../Container';
import styled from 'styled-components';
import {Separator} from '../../Separator';
import {PageTitle} from '../../UI/PageTitle';
import {Title} from '../../UI/Title';
import {Description} from '../../UI/Description';
import {
  ReactComponent as Github,
} from '../../../../assets/public/icons/github.svg';
import {
  ReactComponent as Link,
} from '../../../../assets/public/icons/link.svg';
import {getEntityDataByLang} from '../../../../utils/data/data';

const Box = styled.div`
  padding: 20px;
`;

const CardBox = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  
  &:after, &:before {
    content: '';
    width: 20%;
    height: 1px;
    background-color: #000;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
  }
  
  a {
    margin-right: 5px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

let LastProjects = ({projects, getLastProjects, lang}) => {
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getLastProjects();
  }, []);

  return (
    <Container maxWidth={1000}>
      <Separator indentBottom={40}/>
      <PageTitle>{lang.text.LAST_PROJECTS}</PageTitle>
      <Separator indentBottom={20}/>
      {
        projects?.slice(0, 3).map((project) => {
          project = getEntityDataByLang(
              project,
              lang.title,
              'projectData',
          );
          return (
            <>
              <Background
                key={project.id}
                maxHeight={440}
                src={project.preview ? API_URL + '/' + project.preview : bg}
                alt={'projects'}
              >
                <Box>
                  <Row
                    justifyContent={
                      project.id % 2 === 0 ? 'flex-start' : 'flex-end'
                    }
                  >
                    <Card
                      maxWidth={370}
                      maxHeight={400}
                    >
                      <CardBox>
                        <Title>{project.title}</Title>
                        <Description>
                          {project.description}
                        </Description>
                        <Row>
                          <a href={project.projectLink}>
                            <Link />
                          </a>
                          <a href={project.githubLink}>
                            <Github />
                          </a>
                        </Row>
                      </CardBox>
                    </Card>
                  </Row>
                </Box>
              </Background>
              <Separator indentBottom={20}/>
            </>
          );
        })
      }
    </Container>
  );
};

LastProjects.propTypes = {
  lang: PropTypes.object,
  projects: PropTypes.array,
  getLastProjects: PropTypes.func,
};

const mapStateToProps = (state) => ({
  projects: state.project.projects,
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({
  getLastProjects: () => {
    dispatch(getAll());
  },
});

LastProjects = connect(mapStateToProps, mapDispatchToProps)(LastProjects);

export {LastProjects};
