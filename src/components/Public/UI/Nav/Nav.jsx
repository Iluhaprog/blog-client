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
  
  @media screen and (max-width: 420px) {
    position: absolute;
    left: -100vw;
    transition: .3s ease-in-out;
    top: 55px;
    
    &.visible {
      left: 0;
    }
    
    ul {
      width: 100vw;
      height: calc(100vh - 55px);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, .95);
      
      li {
        margin: 15px 0;
        font-size: 24px;
      }
    }
  }
`;

const Nav = ({paths, visible = false, hide}) => {
  return (
    <NavBox className={visible ? 'visible' : ''}>
      <ul>
        {
          paths?.map((path) => (
            <li key={path.to} onClick={() => hide()}>
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
  visible: PropTypes.bool,
  hide: PropTypes.func,
};

export {Nav};
