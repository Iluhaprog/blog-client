import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import {LangSelector} from '../../components/LangSelector';
import {ThemeToggle} from '../../components/Toggle/Theme';
import {Posts} from './Posts';
import {Profile} from './Profile';
import {Projects} from './Projects';
import {Dirs} from './Dirs';
import {Route, Switch, Redirect} from 'react-router-dom';
import {LogoutButton} from '../../components/LogoutButton';
import {Post} from './Post';

const Admin = ({lang, theme, isAuthorized}) => {
  const links = ['profile', 'posts', 'projects', 'dirs'];

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
          <Route path='/admin/dirs'>
            <Dirs />
          </Route>
          <Route path='/admin/post/:id'>
            <Post />
          </Route>
        </Switch>
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
