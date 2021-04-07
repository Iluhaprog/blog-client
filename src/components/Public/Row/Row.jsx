import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};
  flex-wrap: ${({wrap}) => wrap || 'nowrap'};
`;

const Row = ({justifyContent, alignItems, children, wrap}) => {
  return (
    <RowBox justifyContent={justifyContent} alignItems={alignItems} wrap={wrap}>
      {children}
    </RowBox>
  );
};

Row.defaultProps = {
  justifyContent: 'flex-start',
};

Row.propTypes = {
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'start',
    'end',
    'center',
    'stretch',
  ]),
  wrap: PropTypes.oneOf(['wrap', 'nowrap']),
  children: PropTypes.node,
};

export {Row};
