import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
`;

const DefaultButton = ({children, onClick, ...props}) => {
  return (
    <Button
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

DefaultButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export {DefaultButton};
