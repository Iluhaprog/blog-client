import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Title} from '../../UI/Title';
import {Description} from '../../UI/Description';
import empty from '../../../../assets/brkImg.png';
import {Row} from '../../Row';
import {ReactComponent as Link} from '../../../../assets/public/icons/link.svg';
import {
  ReactComponent as Github,
} from '../../../../assets/public/icons/github.svg';

const ProjectCardBox = styled.article`
  position: relative;
  max-width: 350px;
  width: 100%;
  height: 350px;
  overflow: hidden;
  border: 1px solid var(--color-1);
  margin: 10px
`;

const ProjectCardPreview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
`;

const ProjectCardItem = styled.div`
  position: absolute;
  top: 75%;
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  background-color: #fff;
  transition: .2s ease-in-out;
  
  &:after, &:before {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background-color: var(--color-1);
    margin: 0 0 15px 0;
  }
  
  &:after {
    margin-top: 15px;  
  }
  
  &:hover {
    top: 0;
  }
  
  a {
    margin-right: 10px;
    
    svg  {
      width: 30px;
      height: 30px;
    }
  }
`;

const ProjectCard = (props) => {
  const {title, description, preview, githubLink, projectLink} = props;
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <ProjectCardBox>
      <ProjectCardPreview>
        <img src={preview ? API_URL + '/' + preview : empty} alt={title} />
      </ProjectCardPreview>
      <ProjectCardItem>
        <Title>{title}</Title>
        <Description>
          {description}
        </Description>
        <Row>
          <a href={projectLink}><Link /></a>
          <a href={githubLink}><Github /></a>
        </Row>
      </ProjectCardItem>
    </ProjectCardBox>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  projectLink: PropTypes.string,
  githubLink: PropTypes.string,
  preview: PropTypes.string,
};

export {ProjectCard};
