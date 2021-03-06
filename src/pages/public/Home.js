import React, {useState} from 'react';
import {Header} from '../../components/Public/UI/Header';
import {Logo} from '../../components/Public/UI/Logo';
import {Nav} from '../../components/Public/UI/Nav';
import {Container} from '../../components/Public/Container';
import {Row} from '../../components/Public/Row';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Button} from '../../components/Public/UI/Button';
import {Bookmark, Globe2, List} from 'react-bootstrap-icons';
import {setLang} from '../../store/settings/settingsActions';
import {locales} from '../../locales/locales';
import {Separator} from '../../components/Public/Separator';
import {Route, Switch, useHistory} from 'react-router-dom';
import {Posts} from './Posts';
import {Projects} from './Projects';
import {About} from './About';
import {Main} from './Main';
import {Column} from '../../components/Public/Column';
import styles from './public.module.css';
import {Footer} from '../../components/Public/UI/Footer';
import {SocialList} from '../../components/Public/SocialList';
import {Post} from './Post';
import {Bookmarks} from './Bookmarks';
import {BookmarkCounter} from '../../components/Public/Bookmark/Counter';
import styled from 'styled-components';

const ManuButton = styled.div`
  display: none;
  
  @media screen and (max-width: 420px) {
    display: block;
  } 
`;

let Home = ({lang, setLang}) => {
  const history = useHistory();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Column
        justifyContent={'space-between'}
        className={styles.col}
      >
        <Header>
          <Container>
            <Row justifyContent={'space-between'} alignItems={'center'}>
              <Row alignItems={'center'}>
                <Logo
                  title={'IN.js'}
                  onClick={() => history.push('/')}
                />
                <Separator indentLeft={50}/>
                <Nav
                  visible={menuVisible}
                  hide={() => setMenuVisible(false)}
                  paths={[
                    {to: '/', title: lang.nav?.HOME},
                    {to: '/posts/1', title: lang.nav?.POSTS},
                    {to: '/projects', title: lang.nav?.PROJECTS},
                    {to: '/about', title: lang.nav?.ABOUT_ME},
                  ]}
                />
              </Row>
              <Row justifyContent={'flex-end'}>
                <Button
                  minWidth={20}
                  mod={'small'}
                  onClick={() => history.push('/bookmarks')}
                >
                  <Bookmark />
                  <BookmarkCounter />
                </Button>
                <Separator indentLeft={10}/>
                <Button
                  onClick={() => setLang(lang.title)}
                  minWidth={50}
                  mod={'small'}
                >
                  <Globe2/>
                  {' ' + lang.title}
                </Button>
                <Separator indentLeft={10}/>
                <ManuButton>
                  <Button
                    onClick={() => setMenuVisible(!menuVisible)}
                    minWidth={20}
                    mod={'small'}
                  >
                    <List />
                  </Button>
                </ManuButton>
              </Row>
            </Row>
          </Container>
        </Header>
        <main className={styles.main}>
          <Container>
            <Switch>
              <Route path={'/posts/:page'}>
                <Posts />
              </Route>
              <Route path={'/post/:id'}>
                <Post />
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
              <Route path={'/'}>
                <Main />
              </Route>
            </Switch>
          </Container>
        </main>
        <Footer>
          <SocialList />
        </Footer>
      </Column>
    </>
  );
};

Home.propTypes = {
  lang: PropTypes.object,
  setLang: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({
  setLang: (lang) => {
    if (lang === 'ru') {
      dispatch(setLang(locales.en));
    }
    if (lang === 'en') {
      dispatch(setLang(locales.ru));
    }
  },
});

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export {Home};
