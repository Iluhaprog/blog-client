import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {Admin} from './pages/admin';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Modal} from './components/Modal/Modal';

function App(props) {
  const {lang, theme, isAuthorized} = props;
  return (
    <Router>
      <div className={`App ${theme}`}>
        <Switch>
          <Route path='/admin'>
            <Admin lang={lang} theme={theme} isAuthorized={isAuthorized}/>
          </Route>
        </Switch>
        <Modal />
      </div>
    </Router>
  );
}

App.propTypes = {
  lang: PropTypes.object,
  theme: PropTypes.string,
  isAuthorized: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
  theme: state.settings.theme,
  isAuthorized: state.auth.isAuthorized,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
