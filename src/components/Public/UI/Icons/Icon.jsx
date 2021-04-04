import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconBox = styled.div`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Icon = (props) => (
  <IconBox
    width={props.width}
    height={props.height}
  >
    {props.children}
  </IconBox>
);

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node,
};

export {Icon};
