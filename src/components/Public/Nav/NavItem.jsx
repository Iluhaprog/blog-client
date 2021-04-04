import React from 'react';
import {Link} from 'react-router-dom';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const NavItemBox = styled.li`
  margin: 20px 0;
  padding: 0;
  width: fit-content;
  
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #000;
    font-family: var(--public-font);
  }
`;

const NavItem = (props) => {
  return (
    <NavItemBox>
      <Link to={props.path}>
        {props.children}
      </Link>
    </NavItemBox>
  );
};

NavItem.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node,
};

export {NavItem};
