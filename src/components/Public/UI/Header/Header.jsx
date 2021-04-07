import React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px 25px;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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
