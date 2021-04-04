import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 6px;
  background: #fff;
`;

const PushButton = ({onClick, children, ...props}) => {
  return (
    <Button
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

PushButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export {PushButton};
