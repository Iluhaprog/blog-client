import React, {useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLocales} from './store/locale/localeActions';
import {Loader} from './components/Public/Loader';

const Admin = React.lazy(() => import('./pages/admin'));
const Home = React.lazy(() => import('./pages/public'));
const Login = React.lazy(() => import('./pages/admin/Login'));

function App(props) {
  const {lang, theme, isAuthorized, getLocales} = props;

  useEffect(() => {
    getLocales();
  }, []);

  return (
    <React.Suspense fallback={<Loader />}>
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
        </div>
      </Router>
    </React.Suspense>
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
