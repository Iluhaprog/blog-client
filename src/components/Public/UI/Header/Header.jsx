import React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px 25px;
`;

const Header = ({children}) => {
  return (
    <HeaderBox>
      {children}
    </HeaderBox>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export {Header};
