import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import {LangSelector} from '../../components/Admin/LangSelector';
import {ThemeToggle} from '../../components/Admin/Toggle/Theme';
import {Posts} from './Posts';
import {Profile} from './Profile';
import {Projects} from './Projects';
import {Dirs} from './Dirs';
import {Route, Switch, Redirect} from 'react-router-dom';
import {LogoutButton} from '../../components/Admin/LogoutButton';
import {Post} from './Post';
import {Project} from './Project';
import {Homes} from './Home';
import {Tags} from './Tags';
import {Message} from '../../components/Admin/Message';
import {Modal} from '../../components/Admin/Modal';

const Admin = ({lang, theme, isAuthorized}) => {
  const links = ['profile', 'posts', 'projects', 'dirs', 'homes', 'tags'];

  if (!isAuthorized) return <Redirect to='/login' />;

  return (
    <>
      <Navbar
        bg={theme}
        variant={theme}
        sticky='top'
        collapseOnSelect
        expand='sm'
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>IN_js</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              {
                links.map((link, index) => (
                  <LinkContainer
                    to={`/admin/${link}`}
                    key={link + index}
                  >
                    <Nav.Link>{lang.adminNav[link.toUpperCase()]}</Nav.Link>
                  </LinkContainer>
                ))
              }
            </Nav>
            <LangSelector />
            <ThemeToggle />
            <LogoutButton />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Switch>
          <Route path='/admin/profile'>
            <Profile />
          </Route>
          <Route path='/admin/posts'>
            <Posts />
          </Route>
          <Route path='/admin/projects'>
            <Projects />
          </Route>
          <Route path={'/admin/tags'}>
            <Tags />
          </Route>
          <Route path='/admin/dirs'>
            <Dirs />
          </Route>
          <Route path='/admin/post/:id'>
            <Post />
          </Route>
          <Route path='/admin/project/:id'>
            <Project />
          </Route>
          <Route path='/admin/homes'>
            <Homes />
          </Route>
        </Switch>
        <Modal />
        <Message />
      </Container>
    </>
  );
};

Admin.propTypes = {
  lang: PropTypes.object,
  theme: PropTypes.string,
  isAuthorized: PropTypes.bool,
};

export {Admin};
