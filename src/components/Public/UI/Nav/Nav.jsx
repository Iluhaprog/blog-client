import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const NavBox = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    
    li {
      margin: 0 10px;
      a {
        color: var(--color-1);
        font-family: var(--public-font);
      }
    }
  }
`;

const Nav = ({paths}) => {
  return (
    <NavBox>
      <ul>
        {
          paths?.map((path) => (
            <li key={path.to}>
              <NavLink
                to={path.to}
                activeStyle={{
                  fontWeight: '700',
                  textDecoration: 'underline',
                }}
              >
                {path.title}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </NavBox>
  );
};

Nav.propTypes = {
  paths: PropTypes.array,
};

export {Nav};
