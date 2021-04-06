import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: center;
`;

const Row = ({justifyContent, children}) => {
  return (
    <RowBox justifyContent={justifyContent}>
      {children}
    </RowBox>
  );
};

Row.defaultProps = {
  justifyContent: 'flex-start',
};

Row.propTypes = {
  justifyContent: PropTypes.string,
  children: PropTypes.node,
};

export {Row};
