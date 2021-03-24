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

function App(props) {
  const {lang, theme} = props;
  return (
    <Router>
      <div className={`App ${theme}`}>
        <Switch>
          <Route path='/admin'>
            <Admin lang={lang} theme={theme}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

App.propTypes = {
  lang: PropTypes.object,
  theme: PropTypes.string,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
  theme: state.settings.theme,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
