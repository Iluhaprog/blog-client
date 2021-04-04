import React from 'react';
import {Nav} from '../../components/Public/Nav';
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import {Posts} from './Posts';
import {Projects} from './Projects';
import {About} from './About';
import {Bookmarks} from './Bookmarks';

const WorkSpaceBox = styled.main`
  padding: 6vh 20px;
  height: 95vh;
`;

const WorkSpaceContent = styled.div`
  position: absolute;
  left: 0;
  top: 6vh;
`;

const WorkSpace = () => {
  return (
    <WorkSpaceBox>
      <Nav />
      <WorkSpaceContent>
        <Switch>
          <Route path={'/posts'}>
            <Posts />
          </Route>
          <Route path={'/projects'}>
            <Projects />
          </Route>
          <Route path={'/about'}>
            <About />
          </Route>
          <Route path={'/bookmarks'}>
            <Bookmarks />
          </Route>
        </Switch>
      </WorkSpaceContent>
    </WorkSpaceBox>
  );
};

export {WorkSpace};
