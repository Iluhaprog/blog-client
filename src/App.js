import React, {useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {Admin} from './pages/admin';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Modal} from './components/Admin/Modal/Modal';
import {Message} from './components/Admin/Message';
import {Login} from './pages/admin/Login';
import {Home} from './pages/public';
import {getLocales} from './store/locale/localeActions';

function App(props) {
  const {lang, theme, isAuthorized, getLocales} = props;

  useEffect(() => {
    getLocales();
  }, []);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Switch>
          <Route path='/admin'>
            <Admin lang={lang} theme={theme} isAuthorized={isAuthorized}/>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Modal />
        {isAuthorized && <Message />}
      </div>
    </Router>
  );
}

App.propTypes = {
  lang: PropTypes.object,
  theme: PropTypes.string,
  isAuthorized: PropTypes.bool,
  getLocales: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
  theme: state.settings.theme,
  isAuthorized: state.auth.isAuthorized,
});

const mapDispatchToProps = (dispatch) => ({
  getLocales: () => {
    dispatch(getLocales());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
