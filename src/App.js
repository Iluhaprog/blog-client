import './App.scss';
import Nav from './components/nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App__box App__box_left">
          <Nav />
        </div>
        <main className="App__box">
          <Switch>
            <Route exact path='/profile' component={Profile} />
            <Route path='/posts' component={Posts} />
            <Route path='/projects' component={Projects} />
            <Route path='/settings' component={Settings} />
            <Route path='/login' component={Login} />
            <Route path='/registration' component={Registration} />
            <Route component={NotFound}/>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
