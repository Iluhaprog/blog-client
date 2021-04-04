import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Button, Container, Row} from 'react-bootstrap';
import {Github, ShareFill} from 'react-bootstrap-icons';
import broken from '../../../../assets/brkImg.png';
import {themes} from '../../../../store/settings/settingsReducer';

const ProjectCardBox = styled.div`
  position: relative;
  max-width: 350px;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin: 15px 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, .3);
  overflow: hidden;
  
  &:hover {
    div:last-child {
      top: 0;
    }
  }
`;
const ProjectPreview = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  top: 0;
  left: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const ProjectDescription = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 10px 30px;
  top: calc(100% - 50px);
  transition: .2s ease-in-out;
  box-shadow: 0 -10px 10px rgba(0, 0, 0, .2);
  background-color: ${({theme}) => {
    return theme === themes.DARK ? '#2a2c32' : '#fff';
  }};
  
  p {
    max-height: 110px;
    overflow-y: scroll;
  }
`;

const ProjectCard = (props) => {
  const {preview, title, description, projectLink, githubLink} = props;
  const {theme, isAdmin, lang} = props;
  const {onClick, onDelete} = props;
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <ProjectCardBox>
      <ProjectPreview>
        <img
          src={preview ? `${API_URL}/${preview}` : broken}
          alt={preview}
        />
      </ProjectPreview>
      <ProjectDescription theme={theme}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Container>
          <Row>
            <Button
              variant={theme}
              style={{marginRight: '10px'}}
              onClick={() => window.open(projectLink, '_blank')}
            >
              <ShareFill />
            </Button>
            <Button
              variant={theme}
              onClick={() => window.open(githubLink, '_blank')}
            >
              <Github />
            </Button>
          </Row>
          {
            isAdmin && (
              <>
                <hr />
                <Row className={'justify-content-between'}>
                  <Button
                    variant={'primary'}
                    onClick={() => onClick()}
                  >
                    {lang.button.EDIT}
                  </Button>
                  <Button
                    variant={'danger'}
                    onClick={() => onDelete()}
                  >
                    {lang.button.DELETE}
                  </Button>
                </Row>
              </>
            )
          }
        </Container>
      </ProjectDescription>
    </ProjectCardBox>
  );
};

ProjectCard.propTypes = {
  theme: PropTypes.string,
  isAdmin: PropTypes.bool,
  lang: PropTypes.object,
  preview: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  projectLink: PropTypes.string,
  githubLink: PropTypes.string,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

export {ProjectCard};
