import React from 'react';
import styled from 'styled-components';
import {Computer} from '../UI/Icons/Computer';
import {NavItem} from './NavItem';
import {Directory} from '../UI/Icons/Direcotry';
import {About} from '../UI/Icons/About';
import {Floppy} from '../UI/Icons/Floppy';

const NavBox = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100%;
  list-style: none;
  margin-left: auto;
`;

const Nav = () => {
  return (
    <NavBox>
      <NavItem path={'/about'}>
        <About width={40} height={40}/>
        <span>About me</span>
      </NavItem>
      <NavItem path={'/posts'}>
        <Directory width={50} height={40}/>
        <span>Posts</span>
      </NavItem>
      <NavItem path={'/projects'}>
        <Computer width={40} height={50}/>
        <span>Projects</span>
      </NavItem>
      <NavItem path={'/Bookmarks'}>
        <Floppy width={40} height={40}/>
        <span>Bookmarks</span>
      </NavItem>
    </NavBox>
  );
};

export {Nav};
