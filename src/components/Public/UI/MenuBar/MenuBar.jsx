import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MenuBarBox = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  min-height: 5vh;
  background-color: #fff;
  box-shadow: 0 1px 0 #000000;
`;

const MenuBarLogo = styled.div`
  svg {
    fill: #000;
  }
  &:hover {
    background-color: #000;
    svg {
      color: #fff;
      fill: #fff;
    }
  }
`;

const MenuBarNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5vh;
  font-family: var(--public-font);
  color: #000;

  a {
    margin: 0 5px;
    color: #000;
    padding: 5px;

    &:hover {
      background-color: #000;
      color: #fff;
      text-decoration: none;
    }
  }
`;

const MenuBar = ({children, logo: Logo}) => {
  return (
    <MenuBarBox>
      <MenuBarLogo>
        <Link to={'/'}><Logo /></Link>
      </MenuBarLogo>
      <MenuBarNav>
        {children}
      </MenuBarNav>
    </MenuBarBox>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
  logo: PropTypes.any,
};

export {MenuBar};
