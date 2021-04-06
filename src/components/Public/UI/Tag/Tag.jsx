import React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

const TagBox = styled.div`
  padding: ${({mod}) => {
    return mod === 'big' ? 10 : 5;
  }}px;
  
  border-radius: ${({mod}) => {
    return mod === 'big' ? 50 : 5;
  }}px;
  
  font-size: ${({mod}) => {
    return mod === 'big' ? 16 : 12;
  }}px;
  
  font-family: var(--public-font);
  color: #000;
  border: 1px solid #000;
  max-width: fit-content;
  
  margin: ${({mod}) => {
    return mod === 'big' ? 10 : 5;
  }}px;
`;

const Tag = ({title, mod}) => {
  return (
    <TagBox mod={mod}>
      {title}
    </TagBox>
  );
};

Tag.propTypes = {
  title: PropTypes.string,
  mod: PropTypes.oneOf(['big', 'small']),
};

export {Tag};
