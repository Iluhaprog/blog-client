import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './pages/admin';
import Login from './pages/Login';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';
import './App.scss';
import { Modal } from './components/modals/Modal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
          <Route path='/registration' component={Registration} />
          <Route component={NotFound} />
        </Switch>
        <Modal />
      </div>
    </BrowserRouter>
  );
}

export default App;
