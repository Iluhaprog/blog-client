import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Image} from '../../UI/Image';

const Box = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    font-size: 24px;
    span {
      font-family: var(--public-font);
      margin: 0 10px;
    }
  }
`;

const SkillBox = styled.div`
  padding: 5px;
  font-family: var(--public-font);
  border: 1px solid #000;
  box-shadow: 0 0 1px 0 #fff;
  margin: 5px;
`;

const AboutContent = ({data}) => {
  const API_URL = process.env.REACT_APP_API_URL;
  return (
    <Box>
      <Image
        width={250}
        height={250}
        src={`${API_URL}/${data.avatar}`}
      />
      <p>
        <span>{data.firstName}</span>
        <span>{data.lastName}</span>
      </p>
      <p>
        {data.about}
      </p>
      <div style={{
        maxWidth: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {
          data.skills?.split(',').map((skill) => (
            <SkillBox key={Date.now()}>
              {skill}
            </SkillBox>
          ))
        }
      </div>
    </Box>
  );
};

AboutContent.propTypes = {
  data: PropTypes.object,
};

export {AboutContent};
