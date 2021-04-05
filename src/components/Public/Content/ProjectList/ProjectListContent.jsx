import React from 'react';
import styled from 'styled-components';
import {Directory} from '../../UI/Icons/Direcotry';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ProjectListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  flex-wrap: wrap;
  padding: 20px;
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    font-size: 12px;
    font-family: var(--public-font);
    color: #000;
  }
`;

const ProjectListContent = ({data}) => {
  return (
    <ProjectListBox>
      {
        data.projects?.map((project) => (
          <Link
            key={project.id}
            to={'/project/' + project.id}
          >
            <Directory width={50} height={40}/>
            <p>{project.title}</p>
          </Link>
        ))
      }
    </ProjectListBox>
  );
};

ProjectListContent.propTypes = {
  data: PropTypes.object,
};

export {ProjectListContent};
